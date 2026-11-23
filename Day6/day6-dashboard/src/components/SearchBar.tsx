import { useRef } from "react";

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Search users..." />

      <button onClick={focusInput}>
        Focus Search
      </button>
    </div>
  );
}

export default SearchBar;