import { test, expect } from "vitest";
import { add } from "../src/math"; // Supposons que 'add' est une fonction exportée depuis un fichier 'math.js'

test("Test de la fonction add", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
