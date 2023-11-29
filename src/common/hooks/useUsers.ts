import { useQuery } from 'react-query';
import { fetchUsers } from '../services';

const useUsers = (sortBy?: string[]) => {
  const { data, isLoading, isError, isFetching } = useQuery(
    ['fetch-users', sortBy],
    () => fetchUsers(sortBy),
    {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return { data, isLoading, isFetching, isError };
};

export default useUsers;
