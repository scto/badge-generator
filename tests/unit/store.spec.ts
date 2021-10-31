import store from "@/store";

describe("store", () => {
  describe("defaults", () => {
    it("has default values on initialization", () => {
      expect(store.state.ghUsername).toBe('MichaelCurrin')
      expect(store.state.repositoryName).toBe('badge-generator')
    });
  })

  describe("#setGitHubUsername", () => {
    it("can set username", () => {
      expect(store.state.ghUsername).toBe('MichaelCurrin')

      store.setGitHubUsername('FooBar')
      expect(store.state.ghUsername).toBe('FooBar')
    });
  })
});
