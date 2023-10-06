import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../utils/blog.json";
import { useMemo } from "react";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import SocialShareSection from "./components/socialShare";
import { useEffect } from "react";
import { MetaHeader } from "../../components/Meta";

const BlogPost = () => {
  const { url } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (!url) {
    throw new Error("Page not found");
  }

  const post = useMemo(() => data.find((post) => post.url === url), [url]);

  if (!post) {
    navigate("/", {
      replace: true,
    });
  }

  return (
    <>
      <MetaHeader title={post.title} description={post.subtitle} image={post.image} />

      <div className={styles.pageContainer}>
        <Navbar />

        <div className={styles.contentWrapper}>
          <SocialShareSection post={post} />

          <article className={styles.article}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.subTitle}>{post.subtitle}</p>

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className={styles.emptyContainer} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
