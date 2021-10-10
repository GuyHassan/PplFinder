import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=${page}`);
    setIsLoading(false);
    
    setUsers(p => [...p, ...response.data.results]);
    setPage(p => p + 1)
  }

  return { users, isLoading, fetchUsers };
};
