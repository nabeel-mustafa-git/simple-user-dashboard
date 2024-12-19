import { createSlice, current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: 1,
      name: "ali",
      email: "ali@gmail.com",
      role: "Manager",
    },
    {
      id: 2,
      name: "hassan",
      email: "hassan@gmail.com",
      role: "employee",
    },
  ],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const newState = [...state];
      const index = state.findIndex((item) => item.id == action.payload.id);
      newState[index].name = action.payload.name;
      newState[index].email = action.payload.email;
      newState[index].role = action.payload.role;
    },
    deleteUser: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
