import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  //initialState: "홍길동",
  initialState: { name: "홍길동", memberYear: 1 },

  reducers: {
    /*   changeName() {
      return "이순신";
    }, */
    /* changeName(state) {
      return state + ":Green";
    }, */
    changeName(state) {
      state.name = state.name + ":Green";
    },
    changeYear(state, action) {
      state.memberYear += action.payLoad;
    },
    //단일 값일 경우 리턴으로 값을 돌리지만 객체 배열은 가져오는거라 리턴 필요x
  },
});

export const { changeYear, changeName } = user.actions;

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      //state.push(action, payload);
      const index = state.findIndex((findId) => {
        return findId.id === action.payload.id;
      });
      if (index > -1) {
        state[index].count++;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
