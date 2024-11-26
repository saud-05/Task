import React from "react";
import { useUsers } from "./components/Data";
import UserTable from "./components/Table";
import UserFilters from "./components/Filters";
import LoadingSpinner from "./components/Loading";
import ErrorBoundary from "./components/Error";

function App() {
  const {
    filteredUsers,
    isLoading,
    error,
    sortOrder,
    cityFilter,
    sortUsers,
    filterUsersByCity,
  } = useUsers();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorBoundary error={error} />;

  return (
    <div className="container mx-auto p-6">
      <UserFilters
        cityFilter={cityFilter}
        sortOrder={sortOrder}
        onCityFilter={filterUsersByCity}
        onSortUsers={sortUsers}
      />
      <UserTable users={filteredUsers} />
    </div>
  );
}

export default App;
