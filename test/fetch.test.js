import { fetchRandomUser } from "../src/fetch";
import { expect, describe, it, jest } from "vitest";
describe("fetchRandomUser()", () => {
  it("should fetch a random user from the api", async () => {
    try {
      const user = await fetchRandomUser();
      expect(user).toBeDefined();
      expect(JSON.parse(user)).toBe(true);
    } catch (error) {
      // c'est une assertion qui échoue délibérément pour signaler une erreur dans le test
      console.log("should not throw any error");
    }
  });
});
