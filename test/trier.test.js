import { test, expect } from "vitest";
import { trier } from "../src/trier";
test("Test de la fonction trier", () => {
  // cas1 : tirer un tableau vide
  let tab_vide = trier([]);
  // cas2 : trier un tableau non vide
  let tab = trier([7, 2, 0, 3, 1]);
  // cas3 : trier un tableau avec des nombres négatifs
  let tab_neg = trier([-3, -7, -1, -5, -2]);
  // cas4 : tableau déjà trié
  let tab_trie = trier([1, 2, 3, 4]);
  // cas4 : tableau inversé
  let tab_inv = trier([4, 3, 2, 1]);
  // cas5 : tableau avec des doublons
  let tab_doub = trier([4, 2, 7, 1, 4, 2]);
  // cas6 : tableau avec des nombres décimaux
  let tab_dec = trier([4.2, 2.6, 7.1, 1.3, 9.9]);
  // cas7 : erreur ; tableau avec des nombres non numériques
  let tab_non_num = trier([4, "a", 7, "b", 9]);
  // cas8 : cas limite ; tableau avec un très grand nombre d'élément
  let tab_gd = Array.from({ length: 10000 }, () =>
    Math.floor(Math.random() * 10000)
  );
  let tab_gd_trié = trier(tab_gd);

  expect(tab_vide).toBeTruthy();
  expect(tab).toEqual([0, 1, 2, 3, 7]);
  expect(tab_neg).toEqual([-7, -5, -3, -2, -1]);
  expect(tab_trie).toEqual([1, 2, 3, 4]);
  expect(tab_inv).toEqual([1, 2, 3, 4]);
  expect(tab_doub).toEqual([1, 2, 2, 4, 4, 7]);
  expect(tab_dec).toEqual([1.3, 2.6, 4.2, 7.1, 9.9]);
  expect(() => {
    tab_non_num.toThrow();
  });
  expect(tab_gd_trié).toEqual([...tab_gd].sort((a, b) => a - b));
});
