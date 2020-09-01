import {
  DataDispatchTypes,
  DATA_FAIL,
  DATA_LOADING,
  DATA_SUCCESS,
  FeedItem,
} from "../actions/dataActionTypes";

interface InitialState {
  loading: Boolean;
  data?: {
    name: string;
    data: FeedItem[];
  };
}

const initialSate: InitialState = {
  loading: false,
};

export const apiResultReducer = (
  state: InitialState = initialSate,
  action: DataDispatchTypes
): InitialState => {
  switch (action.type) {
    case DATA_FAIL:
      return { loading: false };
    case DATA_LOADING:
      return {
        loading: true,
      };
    case DATA_SUCCESS:
      return {
        loading: false,
        data: {
          name: action.payload.name,
          data: action.payload.data,
        },
      };
    default:
      return { ...state };
  }
};
