import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://127.0.0.1:8000/";

// create User
export const createUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await axios.post(POST_URL, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});

// read User
export const showUser = createAsyncThunk("showUser", async (data) => {
  try {
    const response = await axios.get(POST_URL, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});

// update User
export const updateUser = createAsyncThunk("updateUser", async (data) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/${data.id}`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});

// delete User
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:8000/${id}`
    );
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});
