import axios from "axios";
import { Dispatch } from "redux";
import {
  DataDispatchTypes,
  DATA_FAIL,
  DATA_LOADING,
  DATA_SUCCESS,
} from "./dataActionTypes";

export const getApisData = (name: string) => async (
  dispatch: Dispatch<any>
) => {
  return axios
    .get(`https://api.hnpwa.com/v0/${name.length > 0 ? name : "news"}/1.json`)
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const GetData = (name: string, page?: number) => async (
  dispatch: Dispatch<DataDispatchTypes>
) => {
  try {
    dispatch({
      type: DATA_LOADING,
    });

    const res = await axios.get(
      `https://api.hnpwa.com/v0/${name.length > 0 ? name : "news"}/${
        page ? page : "1"
      }.json`
    );
    console.log(name);
    dispatch({
      type: DATA_SUCCESS,
      payload: { name, data: res.data },
    });
  } catch (e) {
    dispatch({
      type: DATA_FAIL,
    });
  }
};
