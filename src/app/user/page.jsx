"use client";

import SearchInput from "@/components/common/SearchInput";
import SearchPreview from "@/components/common/SearchPreview";
import { useRef, useState } from "react";

export default function User() {
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    const query = inputRef?.current?.value;
    if (query) {
      console.log(query);
      await fetch(`http://localhost:3000/api/user?query=${query}`)
        .then((res) => res.json())
        .then((res) => setResults(res));
    } else {
      setResults([]);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full h-full bg-sky-100"
      onChange={handleSearch}
    >
      <div className="min-w-[320px] max-w-md rounded-md min-h-[300px]">
        <SearchInput inputRef={inputRef} />
        <ul className="w-full bg-sky-50">
          {results.map((result) => (
            <SearchPreview key={result.id} name={result.name} />
          ))}
        </ul>
      </div>
    </form>
  );
}
