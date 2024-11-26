import React from "react";

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-gray-50 transition duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No users found matching the current filter.
        </div>
      )}
    </div>
  );
};

export default UserTable;
