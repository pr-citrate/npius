"use client";

// Import useEffect and useState for React and your custom useDebounce hook
import { useRef, useState, useEffect } from "react";
import useDebounce from "@/hooks/useDebounce";
import SearchInput from "@/components/common/SearchInput";
import SearchPreview from "@/components/common/SearchPreview";
import { useRouter } from "next/navigation"; // Corrected from 'next/navigation'

export default function User() {
  const [inputValue, setInputValue] = useState(""); // State to track input value
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(inputValue, 300);

  useEffect(() => {
    const handleSearch = async () => {
      const query = debouncedSearchTerm.trim();
      if (!/^[\*]*$/.test(query)) {
        console.log(query);
        await fetch(`http://localhost:3000/api/user?query=${query}`)
          .then((res) => res.json())
          .then((res) => setResults(res));
      } else {
        setResults([]);
      }
    };

    if (debouncedSearchTerm) {
      handleSearch();
    }
  }, [debouncedSearchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (results[0]) {
      router.push(`/user/${results[0].id}`);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key == "ArrowDown") {
      document.querySelector(".preview")?.focus();
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full h-full bg-sky-100"
      onSubmit={handleSubmit}
    >
      <div className="min-w-[320px] max-w-md rounded-md min-h-[300px]">
        <SearchInput
          inputRef={inputRef}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <ul className="w-full bg-sky-50">
          {results.map((result) => (
            <SearchPreview
              key={result.id}
              name={result.name}
              href={`http://localhost:3000/user/${result.id}`}
            />
          ))}
        </ul>
      </div>
    </form>
  );
}
