import React from "react";
import styles from "./style.module.css";
import { useSearchParams } from "react-router-dom";
import SearchInput from "../searchInput";

const BlogPageHeader = () => {
  const [params] = useSearchParams();
  const search = params.get("search");

  return (
    <div className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        {search ? (
          <p className={styles.searchHeading}>
            Search results for{" "}
            <span className={styles.searchText}>{search}</span>
          </p>
        ) : (
          <>
            <h3 className={styles.heading}>Lomads Blog</h3>

            <p className={styles.subheading}>
              At Lomads, we're shaping a platform for DeSci and open source, prioritizing seamless collaboration and fair value sharing.
            </p>
          </>
        )}
      </div>

      <SearchInput key={search} />
    </div>
  );
};

export default BlogPageHeader;
