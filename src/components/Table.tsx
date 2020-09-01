import React, { useCallback, useRef, useState } from "react";
import { FeedItem } from "../actions/dataActionTypes";
import { createLink } from "../helpers/tableHelpers";
interface TableProps {
  data: FeedItem[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  const observer = useRef<IntersectionObserver>();
  const [copiedData, setCopiedData] = useState(data.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(1);
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

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Title</th>

          <th>Domain</th>
        </tr>
      </thead>
      {/* <tbody>{getRowsData(data)}</tbody>
       */}
      <tbody>
        {copiedData.map((obj, idx) => (
          <tr
            key={obj.id}
            ref={copiedData.length === idx + 1 ? lastTableElement : null}
          >
            <td>{new Date(obj.time).toLocaleDateString()}</td>
            <td>
              <a target="blank" href={createLink(obj.url)}>
                {obj.title}
              </a>
            </td>
            <td>{obj.domain}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
