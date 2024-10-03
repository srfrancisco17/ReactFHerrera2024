import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
     isSaving: false,
     messageSaved: '',
     notes: [],
     active: null
   },
   reducers: {
    savingNewNote: (state, action) => {
      state.isSaving = action.payload;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {

    },
    setSaving: (state) => {
      
    },
    updateNote: (state, action) => {

    },
    deleteNodeById: (state, action) => {

    }
   }
});

export const { 
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById 
} = journalSlice.actions;