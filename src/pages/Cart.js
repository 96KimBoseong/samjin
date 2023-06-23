import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeYear } from "./store";

//

//
export default function Cart() {
  /* store에 있는 state를 useSelector가 가져오는 hook  */
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        <span style={{ color: "blue", fontWeight: "bold" }}>({state.user.name})</span>님의 장바구니
      </h2>
      <button onClick={() => dispatch(changeName())}>닉네임 바꾸기</button>
      <h3>회원가입기간 : {state.user.memberYear}년</h3>
      <button onClick={dispatch(changeYear(1))}>+</button>
      <button onClick={dispatch(changeYear(-1))}>-</button>
      <button></button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>갯수</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button>+</button>
                  <button>-</button>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
