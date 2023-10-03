import React, { useState, useCallback } from "react";
import styles from "./style.module.css";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [params, setParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(params.get("search") ?? "");

  const handleOnChange = useCallback(
    (e) => {
      const value = e.target.value;

      if (value.length === 0 && params.has("search")) {
        params.delete("search");
        setParams(params);
      } else {
        setSearchValue(value);
      }
    },
    [params, setParams]
  );

  const handleSearch = useCallback(() => {
    setParams({
      search: searchValue,
    });
  }, [searchValue, setParams]);

  const handleOnKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <div className={styles.bottomHeader}>
      <div className={styles.searchWrapper}>
        <input
          value={searchValue}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          className={styles.searchInput}
          placeholder="Search"
        />
        <button
          type="button"
          onClick={handleSearch}
          className={styles.searchButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_147_160)">
              <path
                d="M7.50758 14.3258C11.2732 14.3258 14.3259 11.2732 14.3259 7.50752C14.3259 3.74187 11.2732 0.689209 7.50758 0.689209C3.74194 0.689209 0.689276 3.74187 0.689276 7.50752C0.689276 11.2732 3.74194 14.3258 7.50758 14.3258Z"
                stroke="#C94B32"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M19.0254 19.0254L12.8164 12.8164"
                stroke="#C94B32"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_147_160">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
