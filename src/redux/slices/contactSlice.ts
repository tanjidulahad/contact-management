import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Contact {
    id: number;
    firstname: string;
    lastname: string;
    status: string;
  }

  const initialState: { contacts: Contact[] } = {
    contacts: [],
  };

  const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
      // Create action for adding a contact
      addContact: (state, action: PayloadAction<{ firstname: string; lastname: string; status: string }>) => {
        const { firstname, lastname, status } = action.payload;
        const newContact = {
          id: state.contacts.length + 1, // Generate a unique ID 
          firstname,
          lastname,
          status,
        };
        state.contacts.push(newContact);
      },
  
      // Create action for updating a contact
      updateContact: (
        state,
        action: PayloadAction<{ id: number; firstname?: string; lastname?: string; status?: string }>
      ) => {
        const { id, firstname, lastname, status } = action.payload;
        const existingContact = state.contacts.find((contact) => contact.id === id);
        if (existingContact) {
          if (firstname !== undefined) existingContact.firstname = firstname;
          if (lastname !== undefined) existingContact.lastname = lastname;
          if (status !== undefined) existingContact.status = status;
        }
      },
  
      // Create action for deleting a contact
      deleteContact: (state, action: PayloadAction<number>) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      },
    },
  });
  
  // Export the actions and reducer
  export const { addContact, updateContact, deleteContact } = contactSlice.actions;
  export default contactSlice.reducer;