const endpoints = {
  beers: {
    all: '/beers',
    random: '/beers/random',
    single: '/beers/:id',
  },
} as const;

export default endpoints;
