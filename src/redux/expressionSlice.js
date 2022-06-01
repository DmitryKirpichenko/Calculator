import { createSlice } from '@reduxjs/toolkit';

export const expressionSlice = createSlice({
  name: 'expression',
  initialState: {
    value: '',
  },
  reducers: {
    writepad: (state, pad) => {
      state.value += pad.payload;
    },
    clearstr: (state) => {
      state.value = '';
    },
    equals: (state, ex) => {
      state.value = ex.payload;
    },
    replacement: (state, ind, newelem) => {
      state.value[ind.payload] = newelem.payload;
    },

  },
});

export const {
  writepad, clearstr, equals, replacement,
} = expressionSlice.actions;
export default expressionSlice.reducer;
