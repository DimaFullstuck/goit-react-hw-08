import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/contacts"); // Використовуємо екземпляр api
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await axios.post("/contacts", newContact); // Використовуємо екземпляр api
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`); // Використовуємо екземпляр api
      return { id: contactId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  "contacts/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/logout");
      return; //
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
