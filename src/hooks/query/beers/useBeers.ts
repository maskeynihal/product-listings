import { getAllBeers } from '../../../services/apis/beers';
import beerQueryFactory from './beersQueryFactory';
import { useQuery } from '@tanstack/react-query';

export function useBeers() {
  const query = useQuery({
    queryKey: beerQueryFactory.all,
    queryFn: () => getAllBeers({}),
  });

  return query;
}
