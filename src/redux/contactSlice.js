import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const usersList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    items: usersList,
  },
  reducers: {
    addToList(state, action) {
      state.items.push(action.payload);
    },
    deleteFromList(state, action) {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addToList, deleteFromList } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

const persistContactConfigs = {
  key: "contacts",
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistContactConfigs,
  contactReducer
);
