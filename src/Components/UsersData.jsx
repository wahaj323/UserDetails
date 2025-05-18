import React from 'react';
import { useUserStore } from '../Store/UserStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const UsersData = () => {
  const { allUsersData, deleteUser, updateUser, userUpdating, setUserUpdating} = useUserStore();
  const users = allUsersData;
  const navigate = useNavigate();


  const handleUpdate = (index) => {
    setUserUpdating(true, index)
    navigate("/add-user")

  };

  const handleDelete = (index) => {
    deleteUser(index)
    console.log('Delete user at index:', index);
    toast.success("User deleted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border">#</th> {/* Serial number column */}
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Age</th>
              <th className="py-2 px-4 border">City</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border text-center">{index + 1}</td> {/* Serial */}
                <td className="py-2 px-4 border text-center">{user.userName}</td>
                <td className="py-2 px-4 border text-center">{user.userAge}</td>
                <td className="py-2 px-4 border text-center">{user.userCity}</td>
                <td className="py-2 px-4 border text-center space-x-2">
                  <button
                    onClick={() => handleUpdate(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersData;
