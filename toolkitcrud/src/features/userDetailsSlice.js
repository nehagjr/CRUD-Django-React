import { createSlice } from "@reduxjs/toolkit";
import { createUser, showUser, updateUser, deleteUser } from "./createAction";

// Create Slice
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],        // Array to hold users
    loading: false,   // Tracks loading state for async actions
    error: null,      // Holds error messages for failed actions
    searchData: [],   // Holds the result of user search
  },
  reducers: {
    // Reducer for handling user search
    searchUser: (state, action) => {
      state.searchData = action.payload;  // Store search results in searchData
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling createUser action
      .addCase(createUser.pending, (state) => {
        state.loading = true;             // Set loading to true while the request is pending
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;            // Reset loading when request is successful
        state.users.push(action.payload); // Add new user to the users array
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;            // Reset loading when request fails
        state.error = action.error.message; // Set error message from rejected action
      })

      // Handling showUser action
      .addCase(showUser.pending, (state) => {
        state.loading = true;             // Set loading to true when fetching users
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;            // Reset loading on success
        state.users = action.payload;     // Populate users array with fetched data
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;            // Reset loading on failure
        state.error = action.error.message; // Capture error message
      })

      // Handling updateUser action
      .addCase(updateUser.pending, (state) => {
        state.loading = true;             // Set loading to true when updating user
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;            // Reset loading on success
        // Update the user in the array based on matching id
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;            // Reset loading on failure
        state.error = action.error.message; // Capture error message
      })

      // Handling deleteUser action
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;             // Set loading to true while deleting user
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;            // Reset loading on success
        const { id } = action.payload;    // Ensure the id is part of payload
        if (id) {
          // Remove user from the users array based on id
          state.users = state.users.filter((user) => user.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;            // Reset loading on failure
        state.error = action.error.message; // Capture error message
      });
  },
});

// Exporting the searchUser action to be dispatched
export const { searchUser } = userDetail.actions;

// Exporting the reducer as the default export from this file
export default userDetail.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { createUser, showUser, updateUser, deleteUser } from "./createAction";

// // Create Slice
// export const userDetail = createSlice({
//   name: "userDetail",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//     searchData: [],
//   },
//   reducers: {
//     searchUser: (state, action) => {
//       state.searchData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handling createUser action
//       .addCase(createUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users.push(action.payload);
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Handling showUser action
//       .addCase(showUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(showUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(showUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Handling updateUser action
//       .addCase(updateUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = state.users.map((user) =>
//           user.id === action.payload.id ? action.payload : user
//         );
//       })
//       .addCase(updateUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Handling deleteUser action
//       .addCase(deleteUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(deleteUser.fulfilled, (state, action) => {
//         state.loading = false;
//         const { id } = action.payload;
//         if (id) {
//           state.users = state.users.filter((user) => user.id !== id);
//         }
//       })
//       .addCase(deleteUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { searchUser } = userDetail.actions;
// export default userDetail.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import { createUser, showUser, updateUser, deleteUser } from "./createAction";

// //create Slice
// export const userDetail = createSlice({
//   name: "userDetail",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//     searchData: [],
//   },
//   reducers: {
//     searchUser: (state, action) => {
//       state.searchData = action.payload;
//     },
//   },
//   extraReducers: {
//     [createUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [createUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users.push(action.payload);
//     },
//     [createUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//     [showUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [showUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//       console.log(state.users);
//     },
//     [showUser.rejected]: (state, action) => {
//       state.loading = true;
//       state.users = action.payload;
//     },
//     [updateUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [updateUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = state.users.map((element) =>
//         element.id === action.payload.id ? action.payload : element
//       );
//     },
//     [updateUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },

//     [deleteUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [deleteUser.fulfilled]: (state, action) => {
//       state.loading = false;

//       const { id } = action.payload;

//       if (id) {
//         state.users = state.users.filter((element) => element.id !== id);
//       }

//       console.log("delete action", action.payload);
//     },
//     [deleteUser.rejected]: (state, action) => {
//       state.loading = true;
//       state.users = action.payload;
//     },
//   },
// });

// export const { searchUser } = userDetail.actions;
// export default userDetail.reducer;