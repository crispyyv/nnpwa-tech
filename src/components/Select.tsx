import React, { ChangeEvent, FormEvent, useState } from "react";

interface SelectProps {
  getData(name: string): void;
}

const apisName = ["News", "Newest", "Ask", "Show", "Jobs"];

export const Select: React.FC<SelectProps> = ({ getData }) => {
  const [apiName, setApiName] = useState("");

  const updateApiName = (e: ChangeEvent<HTMLSelectElement>) => {
    setApiName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData(apiName.toLowerCase());
    setApiName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select defaultValue={apiName} onChange={updateApiName}>
          {apisName.map((n, idx) => (
            <option key={idx} value={n}>
              {n}
            </option>
          ))}
        </select>
        <button type="submit">Select</button>
      </form>
    </>
  );
};
