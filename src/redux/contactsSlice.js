import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// !to get new contacts to LocalStorage
// import { LOCAL_STORAGE_KEY } from './constants';
// const contactsInitialState =
//   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.contacts)) ?? [];

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid().slice(0, 8),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
