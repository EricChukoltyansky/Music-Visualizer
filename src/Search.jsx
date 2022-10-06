import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.currentValue);
    fetch(`/search?${search}`)
      .then((resp) => resp.json())
      .then((data) => setResults(data));
  };

  return (
    <div>
      <input value={search} onChange={onChange} />
      {results.map((result) => (
        <div>{result}</div>
      ))}
    </div>
  );
};
