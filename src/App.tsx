import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "./actions/dataActions";
import { Anchor } from "./components/Anchor";
import { Loader } from "./components/Loader";
import { Select } from "./components/Select";
import { Table } from "./components/Table";
import { useWindowSize } from "./hooks/useWindowSize";
import { RootStore } from "./store";
import { Center } from "./styles/Center";
import GlobalStyle from "./styles/GlobalStyle";
export interface HelloWorldProps {}

export const App = (props: HelloWorldProps) => {
  const dataState = useSelector((state: RootStore) => state.data);
  const width = useWindowSize().width;
  const dispatch = useDispatch();
  console.log(dataState);
  const handleGetData = (name: string, pages: number) => {
    dispatch(GetData(name, pages));
  };

  return (
    <>
      <GlobalStyle />
      <Center>
        <h1 id="#top">Select name of API</h1>
        <Select getData={handleGetData} />
        <hr />
        {dataState.loading ? (
          <Loader />
        ) : dataState.data ? (
          <>
            <Table data={dataState.data.data} windowWidth={width} />
            <Anchor />
          </>
        ) : null}
      </Center>
    </>
  );
};
