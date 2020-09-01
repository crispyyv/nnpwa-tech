export const DATA_LOADING = "DATA_LOADING";
export const DATA_FAIL = "DATA_FAIL";
export const DATA_SUCCESS = "DATA_SUCCESS";

export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface DataLoading {
  type: typeof DATA_LOADING;
}

export interface DataFail {
  type: typeof DATA_FAIL;
}

export interface DataSuccess {
  type: typeof DATA_SUCCESS;
  payload: { name: string; data: FeedItem[] };
}

export type DataDispatchTypes = DataLoading | DataFail | DataSuccess;
