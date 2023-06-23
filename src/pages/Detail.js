import React from "react";
import { useParams } from "react-router-dom";
import { addItem } from "./store";
import { useDispatch } from "react-redux";

export default function Detail(props) {
  const { bests } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Detail Page</h2>
      <img src={bests[id].image} alt="" style={{ width: 500 }} />
      <h4>{bests[id].title}</h4>
      <p>{bests[id].price}</p>
    </div>
  );
}
