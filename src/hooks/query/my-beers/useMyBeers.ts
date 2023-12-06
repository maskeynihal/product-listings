import { MyBeer, createMyBeers, getMyBeers } from '../../../services/apis/myBeers';
import queryKeys from './mybeersQueryFactory';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useMyBeers() {
  const query = useQuery({
    queryKey: queryKeys.all,
    queryFn: () => getMyBeers(),
  });

  return query;
}

export function useCreateMyBeers() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: MyBeer) => createMyBeers(data),
    onSuccess: (data) =>
      queryClient.setQueryData(queryKeys.all, (currentData: Array<MyBeer>) =>
        currentData ? [...currentData, data] : currentData,
      ),
  });

  return mutation;
}
