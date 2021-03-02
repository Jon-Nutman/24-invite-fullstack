import { createSlice } from '@reduxjs/toolkit';

export const inviteSlice = createSlice({
  name: 'invite',
  initialState: {
   going: [],
   notGoing: [],
   
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addToGoing: (state, action) => {
      const goingAray = { ...action.payload, going: true }
      // const isGoing = state.going.find(
      //   (person) => person.id.value === goingAray.id.value
      // )
    },
    addToNotGoing: (state, action) => {
      const goingAray = { ...action.payload, going: false }
      // const isGoing = state.going.find(
      //   (person) => person.id.value === goingAray.id.value
      // )
    }
  },
});

export const { increment, decrement, incrementByAmount, addToGoing } = inviteSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
export const selectCount = state => state.invite.value;

export default inviteSlice.reducer;
