import type { Ingredients } from '@/services/apis/beers';

export function getIngredients(ingredients: Ingredients) {
  const hops = ingredients.hops.map((hop) => `${hop.name}`);
  const malt = ingredients.malt.map((malt) => `${malt.name}`);
  const yeast = ingredients.yeast;

  return {
    hops,
    malt,
    yeast,
  };
}
