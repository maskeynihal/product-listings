const endpoints = {
  beers: {
    all: '/beers',
    random: '/beers/random',
    detail: '/beers/:id',
  },
} as const;

export default endpoints;
