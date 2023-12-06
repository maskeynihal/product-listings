const beerQueryFactory = {
  all: ['beers'],
  detail: (beerId: string | number) => ['beers', beerId],
};

export default beerQueryFactory;
