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
