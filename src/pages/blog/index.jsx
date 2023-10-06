import React from "react";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import BlogPageHeader from "./components/header";
import data from "../../utils/blog.json";
import Post from "./components/post";
import { useSearchParams } from "react-router-dom";

const Blogs = () => {
  const [params] = useSearchParams();
  const search = params.get("search");

  const posts = (() => {
    if (search && search.length > 0) {
      const filteredPosts = data.filter((post) => {
        const lowerCaseSearch = search.toLowerCase();
        return post.title.toLowerCase().includes(lowerCaseSearch);
      });

      return filteredPosts;
    } else {
      return data;
    }
  })();

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <div className={styles.content}>
        <BlogPageHeader />

        <div className={styles.postsWrapper}>
          {posts.length > 0 ? (
            posts.map((blog) => <Post {...blog} key={blog.url} />)
          ) : (
            <p className={styles.noPosts}>
              No posts found. Try a different search?
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
