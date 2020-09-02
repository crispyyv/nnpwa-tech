import React from "react";
import { FeedItem } from "../actions/dataActionTypes";
export const getKeys = (json: FeedItem) => {
  return Object.keys(json);
};

export const getHeader = (data: FeedItem[]) => {
  const keys = getKeys(data[0]);
  return keys.map((key, index) => {
    return <th key={key}>{key.toUpperCase()}</th>;
  });
};

export const URI_REGEXP = new RegExp(`(http://|https://|www\.)([^ '"]*)`);

export const createLink = (link: string) => {
  if (link.match(URI_REGEXP)) return link;
  else return `https://news.ycombinator.com/${link}`;
};

export const sortByColumn = (
  a: FeedItem,
  b: FeedItem,
  reverse: boolean,
  column?: keyof FeedItem,
  time?: boolean
) => {
  if (time) {
    if (new Date(a.time) < new Date(b.time)) return reverse ? -1 : 1;
    if (new Date(a.time) > new Date(b.time)) return reverse ? 1 : -1;
  } else {
    if (a[column] < b[column]) return reverse ? -1 : 1;
    if (a[column] > b[column]) return reverse ? 1 : -1;
  }
  return 0;
};

export const getFullTime = (timeString: number): string => {
  return new Date(timeString).toLocaleTimeString();
};

export const sortByTime = (timeA: string, timeB: string) => {
  console.log(new Date(timeA), new Date(timeB));
};
