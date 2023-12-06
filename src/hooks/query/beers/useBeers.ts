import { getAllBeers, getBeerById } from '../../../services/apis/beers';
import beerQueryFactory from './beersQueryFactory';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_NUMBER = 1;

interface UseBeers {
  pageSize?: number;
  page?: number;
}

export function useBeers({ pageSize = DEFAULT_PAGE_SIZE, page = DEFAULT_PAGE_NUMBER }: UseBeers) {
  const query = useInfiniteQuery({
    queryKey: beerQueryFactory.all,
    queryFn: (params) => getAllBeers({ per_page: pageSize, page: params.pageParam || page }),
    initialPageParam: DEFAULT_PAGE_NUMBER,
    getNextPageParam: (lastPage) => {
      return (lastPage.meta.page || 0) + 1;
    },
  });

  return query;
}

export function useGetBeerById(beerId: number | string) {
  const query = useQuery({
    queryKey: beerQueryFactory.detail(beerId),
    queryFn: () => getBeerById(beerId),
  });

  return query;
}
