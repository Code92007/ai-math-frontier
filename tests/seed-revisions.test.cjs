const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "../app.js"), "utf8");
const { SEED_EVENTS, SEED_REVISIONS, reviseSeedEvent } = vm.runInNewContext(
  source.split("const state =")[0] +
  "\n({ SEED_EVENTS, SEED_REVISIONS, reviseSeedEvent })"
);
const previous = SEED_REVISIONS[16][0];
const replacement = SEED_EVENTS.find((event) => event.id === previous.id);
const seed = () => ({ ...structuredClone(previous), origin: "seed" });

test("corrects an untouched seed while retaining identity and local metadata", () => {
  const original = { ...seed(), importedAt: "2026-10-10T00:00:00Z" };
  const revised = reviseSeedEvent(original, previous);
  assert.notEqual(revised, original);
  assert.equal(revised.id, original.id);
  assert.equal(revised.date, original.date);
  assert.equal(revised.origin, "seed");
  assert.equal(revised.importedAt, original.importedAt);
  for (const key of Object.keys(replacement)) {
    assert.equal(JSON.stringify(revised[key]), JSON.stringify(replacement[key]));
  }
  assert.equal(original.title, previous.title);
});

test("does not restore a deleted seed or replace a local record with the same ID", () => {
  assert.equal(reviseSeedEvent(undefined, previous), undefined);
  const local = { ...seed(), origin: "local" };
  assert.equal(reviseSeedEvent(local, previous), local);
});

test("preserves a user edit even when its content matches the original", () => {
  const edited = { ...seed(), editedAt: "2026-10-20T00:00:00Z" };
  assert.equal(reviseSeedEvent(edited, previous), edited);
});

test("preserves imported changes without an edit timestamp", () => {
  const titleEdit = { ...seed(), title: "我的核对说明" };
  const sourceEdit = seed();
  sourceEdit.sources[0].url = "https://example.org/my-source";
  const categoryEdit = { ...seed(), domain: "algorithms" };
  for (const edited of [titleEdit, sourceEdit, categoryEdit]) {
    assert.equal(reviseSeedEvent(edited, previous), edited);
  }
});

test("a corrected seed is unchanged on a repeated migration", () => {
  const revised = reviseSeedEvent(seed(), previous);
  assert.equal(reviseSeedEvent(revised, previous), revised);
});
