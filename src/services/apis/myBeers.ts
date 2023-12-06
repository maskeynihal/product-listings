const MY_BEERS_KEY = 'MY-BEERS';

export interface MyBeer {
  name: string;
  genre: string;
  description: string;
  imageUrl: string;
}

export async function getMyBeers(): Promise<Array<MyBeer>> {
  const myBeers = localStorage.getItem(MY_BEERS_KEY);

  return myBeers ? JSON.parse(myBeers) : [];
}

export async function createMyBeers(input: MyBeer) {
  const currentMyBeers = await getMyBeers();

  const updatedMyBeers = [...currentMyBeers, input];

  localStorage.setItem(MY_BEERS_KEY, JSON.stringify(updatedMyBeers));

  return input;
}
