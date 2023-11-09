import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery, type UseQueryResult } from "react-query";

function useAuth(): UseQueryResult<{
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
}> {
  return useQuery(
    "auth",
    async () => {
      const [token, user] = await Promise.all([
        AsyncStorage.getItem("@token"),
        AsyncStorage.getItem("@user"),
      ]);
      if (token && user) {
        return {
          isLoggedIn: true,
          token,
          user: JSON.parse(user),
        };
      }

      return {
        isLoggedIn: false,
        token: null,
        user: null,
      };
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
}

export default useAuth;
