import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { NextPage } from "next";

import InputComponent from "../components/InputComponent";
import RenderTodos from "../components/RenderTodos";
import { createTodo, addTodo, clearTodo } from "../redux/actions";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { todo, todos } = useSelector((state: any) => state);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(createTodo(e.target.value));
  };
  const clickHandler = () => {
    if (todo && todo !== " ") {
      dispatch(addTodo(todo));
      dispatch(clearTodo());
    };
  };
  return (
    <div>
      <h1>NextJs Todo Application with Redux</h1>
      <InputComponent {...{ changeHandler, clickHandler, todo }} />
      <RenderTodos {...{todos}} />
    </div>
  );
};

export default Home;
