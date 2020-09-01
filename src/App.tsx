import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "./actions/dataActions";
import { Loader } from "./components/Loader";
import { Select } from "./components/Select";
import { Table } from "./components/Table";
import { RootStore } from "./store";
export interface HelloWorldProps {}

export const App = (props: HelloWorldProps) => {
  const dataState = useSelector((state: RootStore) => state.data);

  const dispatch = useDispatch();
  console.log(dataState);
  const handleGetData = (name: string, pages: number) => {
    dispatch(GetData(name, pages));
  };

  return (
    <>
      <h1 id="#top">Select name of API</h1>
      <Select getData={handleGetData} />
      <hr />
      {dataState.loading ? (
        <Loader />
      ) : dataState.data ? (
        <Table data={dataState.data.data} />
      ) : null}
    </>
  );
};
