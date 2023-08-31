import React, { useCallback, useState } from "react";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import BlogPageHeader from "./components/header";
import data from "../../utils/blog.json";
import Post from "./components/post";

const Blogs = () => {
  const [posts, setPosts] = useState(data);

  const onSearch = useCallback((search) => {
    setPosts((value) =>
      value.filter((post) => {
        const lowerCaseSearch = search.toLowerCase();
        return post.title.toLowerCase().includes(lowerCaseSearch);
      })
    );
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar useBlogLogo />

      <div className={styles.content}>
        <BlogPageHeader onSearch={onSearch} />

        <div className={styles.postsWrapper}>
          {posts.map((blog) => (
            <Post {...blog} key={blog.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
