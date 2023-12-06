import endpoints from '../../constants/endpoints';
import http from '../../lib/http';

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu?: number;
  target_fg: number;
  target_og: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Volume {
  value: number;
  unit: string;
}

export interface BoilVolume {
  value: number;
  unit: string;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: string;
}

export interface MashTemp {
  temp: Temp;
  duration?: number;
}

export interface Temp {
  value: number;
  unit: string;
}

export interface Fermentation {
  temp: Temp;
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface Malt {
  name: string;
  amount: Amount;
}

export interface Amount {
  value: number;
  unit: string;
}

export interface Hop {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
}

type BeerParams = {
  abv_gt?: number;
  abv_lt?: number;
  ibu_gt?: number;
  ibu_lt?: number;
  ebc_gt?: number;
  ebc_lt?: number;
  beer_name?: string;
  yeast?: string;
  brewed_before?: string; // Assuming the date is represented as a string in the format "mm-yyyy"
  brewed_after?: string; // Assuming the date is represented as a string in the format "mm-yyyy"
  hops?: string;
  malt?: string;
  food?: string;
  ids?: string; // Assuming the format is "id|id|..."
  page: number;
  per_page: number;
};

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_NUMBER = 1;

export async function getAllBeers(params: BeerParams = { page: DEFAULT_PAGE_NUMBER, per_page: DEFAULT_PAGE_SIZE }) {
  const { data } = await http.get<Array<Beer>>(endpoints.beers.all, { params });

  return { data, meta: { page: params.page, pageSize: params.per_page } };
}
