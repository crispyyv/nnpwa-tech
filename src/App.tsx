import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "./actions/dataActions";
import { Select } from "./components/Select";
import { RootStore } from "./store";

export interface HelloWorldProps {}

export const App = (props: HelloWorldProps) => {
  const dataState = useSelector((state: RootStore) => state.data);
  const dispatch = useDispatch();
  console.log(dataState);
  const handleGetData = (name: string) => {
    dispatch(GetData(name));
  };

  return (
    <>
      <h1>Select name of API</h1>
      <Select getData={handleGetData} />
    </>
  );
};
