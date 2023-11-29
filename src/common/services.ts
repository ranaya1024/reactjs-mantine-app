import axios from "axios";
import { User } from "./types/user";

export const fetchUsers = async (sortKeys?: string[]) => {
  let apiUrl = import.meta.env.VITE_API_URL;

  if(sortKeys) {
    apiUrl = `${apiUrl}?sortBy=${sortKeys}`;
  }
  const response = await axios.get(apiUrl);
  return response.data as User[] ?? [];
};