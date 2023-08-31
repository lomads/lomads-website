import React from "react";
import styles from "./post.module.css";
import Tags from "../tags";
import { Link } from "react-router-dom";

const Post = ({
  url,
  title,
  subtitle,
  publishedAt,
  minutesToRead,
  tags,
  source,
  image,
}) => {
  return (
    <Link to={`/blog/${url}`} className={styles.post}>
      <div>
        <p className={styles.postSource}>
          {source} | {publishedAt}
        </p>

        <img className={styles.postSmallImage} src={image} alt={title} />

        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postSubtitle}>{subtitle}</p>

        <div className={styles.postFooter}>
          <Tags
            tags={tags}
            textColor="#76808D"
            backgroundColor="#9090904d"
            dotColor="#909090"
          />
          <p className={styles.postTime}>{minutesToRead} min read</p>
        </div>
      </div>

      <img className={styles.postImage} src={image} alt={title} />
    </Link>
  );
};

export default Post;
