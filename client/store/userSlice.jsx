import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload.map((items) => {
        return {
          _id: items._id,
          name: items.name,
          email: items.email,
          contact: items.contact,
        };
      });
    },

    createUser: (state, action) => {
      state.users.push(action.payload);
    },

    deleteUser: (state, action) => {
      const id = action.payload.id;
      state.users = state.users.filter((u) => u.id !== id);
    },

    updateUser: (state, action) => {
      const index = state.users.findIndex((x) => x.id === action.payload.id);
      console.warn(index);
      state.users[index] = {
        id: action.payload.id,
        name: action.payload.name,  
        email: action.payload.email,
        contact: action.payload.contact,
      };
    },
  },
});

export const { getUsers, createUser, deleteUser, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
