import { test, expect } from "vitest";
import { transformer } from "../src/chaine";

test("Test de la fonction transformer", () => {
  let ch_vide = transformer("");
  let ch2 = transformer("bonjour");
  let ch3 = transformer("$test?@^<*");

  expect(ch_vide).toBeFalsy();
  expect(ch2).toBe("BONJOUR");
  expect(ch3).toBe("$TEST?@^<*");
});
