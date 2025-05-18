import { create } from "zustand";

export const useUserStore = create((set) => ({
  userName: "",
  userAge: "",
  userCity: "",
  allUsersData: [],
  userUpdating: {
    status: false,
    index: null,
  },

  setUserName: (userName) => set({ userName }),

  setUserAge: (userAge) => set({ userAge }),
  
  setUserCity: (userCity) => set({ userCity }),
  
  setAllUsersData: (user) =>
    set((state) => ({
      allUsersData: [...state.allUsersData, user],
    })),
  
  deleteUser: (index) =>
    set((state) => {
      const userToBeDeleted = state.allUsersData[index];
      return {
        allUsersData: state.allUsersData.filter((user) => {
          return user != userToBeDeleted;
        }),
      };
    }),
  
  updateUser: (index, toBeUpdatedUser) =>
    set((state) => ({
      allUsersData: state.allUsersData.map((user, key) => {
        if (key === index) {
          return toBeUpdatedUser;
        }
        return user;
      }),
    })),
  
  setUserUpdating: (status, index) =>
    set({
      userUpdating: {
        status: status,
        index: index,
      },
    }),
}));
