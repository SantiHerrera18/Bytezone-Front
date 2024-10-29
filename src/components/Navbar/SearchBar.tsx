/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      router.push(`/categories/${inputValue}`);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-1 w-3/4 items-center flex-grow justify-end p-2 "
    >
      <div className="flex-grow flex justify-end">
        <input
          list="productName"
          value={inputValue}
          onChange={handleChange}
          className="border pl-4 border-gray-600 rounded-xl w-3/4 text-purple-900"
        />
        <datalist id="productName">
          <option value="iPhone" label="iPhone 11"></option>
          <option value="iPad"></option>
          <option value="MacBook"></option>
          <option value="Watch" label="Apple Watch series 6"></option>
          <option value="Homepod" label="Homepod mini"></option>
          <option value="Airpods" label="AirPods pro"></option>
        </datalist>
      </div>
      <button type="submit">
        <img src="/search.png" alt="Search" className="w-6" />
      </button>
    </form>
  );
};

export default SearchBar;
