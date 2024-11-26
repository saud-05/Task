import { useState, useEffect } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users, API not Responding");
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const sortUsers = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      return newSortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

    setFilteredUsers(sortedUsers);
  };

  const filterUsersByCity = (inputCity) => {
    setCityFilter(inputCity.toLowerCase());

    const filtered = users.filter((user) =>
      user.address.city.toLowerCase().includes(inputCity.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  return {
    users,
    filteredUsers,
    isLoading,
    error,
    sortOrder,
    cityFilter,
    sortUsers,
    filterUsersByCity,
  };
};
