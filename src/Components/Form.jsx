import { useUserStore } from "../Store/UserStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Form = () => {
  const {
    userName,
    setUserName,
    userAge,
    setUserAge,
    userCity,
    setUserCity,
    allUsersData,
    setAllUsersData,
    updateUser,
    userUpdating,
    setUserUpdating,
  } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (userUpdating.status) {
      const updatedUser = allUsersData[userUpdating.index];
      setUserName(updatedUser.userName);
      setUserAge(updatedUser.userAge);
      setUserCity(updatedUser.userCity);
    }
  }, [userUpdating.status, userUpdating.index, allUsersData]);

  const onUserSubmit = (e) => {
    e.preventDefault();
    const user = {
      userName,
      userAge,
      userCity,
    };
    if (userUpdating.status) {
      updateUser(userUpdating.index, user);
      setUserUpdating(false, null);
      toast.success("User updated successfully!");
      navigate("/view-users")
    } else {
      setAllUsersData(user);
      toast.success("User added successfully!");
    }

    setUserAge("");
    setUserCity("");
    setUserName("");
    console.log(allUsersData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {userUpdating.status
          ? "Update User Details Form"
          : "Add User Details Form"}
      </h2>
      <form onSubmit={onUserSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <input
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {userUpdating.status? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
