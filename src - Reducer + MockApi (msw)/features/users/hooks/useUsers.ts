import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import type { User } from "../types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(error instanceof Error ? error.message : "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    users,
    loading,
    error,
  };
}