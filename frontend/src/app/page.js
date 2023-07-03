"use client";

import SearchForm from "./components/SearchForm";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SearchForm />
      <Popular />
    </div>
  );
}
