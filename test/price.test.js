import { test, expect } from "vitest";
import { isPriceInRange } from "../src/price";

test("Tester la fonction isPriceRange", () => {
  // tester la limite inférieure
  const borne_inf = isPriceInRange(5, 5, 8);
  expect(borne_inf).toBeTruthy();
  // tester la limite supérieure
  const borne_sup = isPriceInRange(8, 5, 8);
  expect(borne_sup).toBeTruthy();
  // tester une valeur dans la plage
  const val = isPriceInRange(3, 1, 5);
  expect(val).toBeTruthy();
  // tester une valeur en dehors de la plage
  const val2 = isPriceInRange(9, 1, 5);
  expect(val2).toBeFalsy();
});
