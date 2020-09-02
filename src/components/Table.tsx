import React, { useCallback, useRef, useState } from "react";
import { FeedItem } from "../actions/dataActionTypes";
import { createLink, getFullTime, sortByColumn } from "../helpers/tableHelpers";
import { StyledTable } from "../styles/StyledTable";
import { MobileFilter } from "./MobileFilter";
interface TableProps {
  data: FeedItem[];
  windowWidth: string;
}

export const Table: React.FC<TableProps> = ({ data, windowWidth }) => {
  const observer = useRef<IntersectionObserver>();
  const [copiedData, setCopiedData] = useState(data.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(1);
  const [reverse, setReverse] = useState({
    time: false,
    title: false,
  });

  const lastTableElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          pageNumber * 30 < data.length
            ? setPageNumber((prevPageNumber) => {
                return prevPageNumber + 1;
              })
            : null;
          setCopiedData(data.slice(0, pageNumber * 30));
        }
      });

      if (node) observer.current.observe(node);
    },
    [pageNumber]
  );
  const sortByTitle = () => {
    setReverse((prev) => {
      console.log(prev);
      return {
        ...prev,
        title: !prev.title,
      };
    });
    console.log(reverse);
    setCopiedData(copiedData.sort((a, b) => sortByColumn(a, b, reverse.title)));
  };
  const handleSortByTime = () => {
    setReverse((prev) => {
      return {
        ...prev,
        time: !prev.time,
      };
    });
    setCopiedData(
      copiedData.sort((a, b) => sortByColumn(a, b, reverse.time, true))
    );
  };
  return (
    <>
      <MobileFilter sortByTime={handleSortByTime} />

      <StyledTable maxWidth={windowWidth}>
        <thead>
          <tr>
            <th onClick={handleSortByTime}>
              Time {reverse.time ? <p>&uarr;</p> : <p>&darr;</p>}
            </th>
            <th onClick={sortByTitle}>
              Title {reverse.title ? <p>&uarr;</p> : <p>&darr;</p>}
            </th>
            <th>Domain</th>
          </tr>
        </thead>

        <tbody>
          {copiedData.map((obj, idx) => (
            <tr
              key={obj.id}
              ref={copiedData.length === idx + 1 ? lastTableElement : null}
            >
              <td>{getFullTime(obj.time)}</td>
              <td>
                <a target="blank" href={createLink(obj.url)}>
                  {obj.title}
                </a>
              </td>
              <td>{obj.domain ? obj.domain : "No domen"}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};
