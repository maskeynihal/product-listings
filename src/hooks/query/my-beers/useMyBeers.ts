import { getMyBeers } from '../../../services/apis/myBeers';
import queryKeys from './mybeersQueryFactory';
import { useQuery } from '@tanstack/react-query';

export function useMyBeers() {
  const query = useQuery({
    queryKey: queryKeys.all,
    queryFn: () => getMyBeers(),
  });

  return query;
}
