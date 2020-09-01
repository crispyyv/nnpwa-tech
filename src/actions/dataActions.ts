import axios from "axios";
import { Dispatch } from "redux";
import {
  DataDispatchTypes,
  DATA_FAIL,
  DATA_LOADING,
  DATA_SUCCESS,
} from "./dataActionTypes";

export const GetData = (name: string, maxPages: number) => async (
  dispatch: Dispatch<DataDispatchTypes>
) => {
  try {
    dispatch({
      type: DATA_LOADING,
    });
    const apiPromises = [];
    // const res = await axios.get(
    //   `https://api.hnpwa.com/v0/${name.length > 0 ? name : "news"}/${
    //     page ? page : "1"
    //   }.json`
    // );
    let resp = [];
    for (let i = 1; i <= maxPages; i++) {
      const res = await axios.get(
        `https://api.hnpwa.com/v0/${name.length > 0 ? name : "news"}/${i}.json`
      );
      resp.push(...res.data);
    }
    // const res = await axios.all(apiPromises);
    console.log("response", resp);
    // console.log("response", res);
    console.log(name);
    dispatch({
      type: DATA_SUCCESS,
      payload: { name, data: resp },
    });
  } catch (e) {
    dispatch({
      type: DATA_FAIL,
    });
  }
};
