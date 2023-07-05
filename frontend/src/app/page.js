"use client";

import SearchForm from "./components/SearchForm";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <div className="min-w-fit h-[3026px] relative bg-white px-40">
      <h1 className="text-3xl">Home</h1>
      <SearchForm />
      <Popular />
    </div>
  );
}
