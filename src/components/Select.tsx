import React, { ChangeEvent, FormEvent, useState } from "react";

interface SelectProps {
  getData(name: string, pages: number): void;
}

const apisName = ["News", "Newest", "Ask", "Show", "Jobs"];
const apisInfo = [
  {
    name: "News",
    maxPage: 10,
  },
  {
    name: "Newest",
    maxPage: 12,
  },
  {
    name: "Ask",
    maxPage: 2,
  },
  {
    name: "Show",
    maxPage: 2,
  },
  {
    name: "Jobs",
    maxPage: 1,
  },
];
export const Select: React.FC<SelectProps> = ({ getData }) => {
  const [curentApi, setCurentApi] = useState({
    name: "news",
    maxPage: "10",
  });

  const updateApiName = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurentApi({
      name: e.target.value,
      maxPage: e.target.options[e.target.selectedIndex].dataset.maxpage,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(curentApi);
    getData(curentApi.name.toLowerCase(), parseInt(curentApi.maxPage));
    setCurentApi({ name: "", maxPage: null });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select defaultValue={curentApi.name} onChange={updateApiName}>
          {apisInfo.map((n, idx) => (
            <option key={idx} value={n.name} data-maxpage={n.maxPage}>
              {n.name}
            </option>
          ))}
        </select>
        <button type="submit">Select</button>
      </form>
    </>
  );
};
