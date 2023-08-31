import React from "react";
import styles from "./style.module.css";

const Tags = ({ tags, ...rest }) => {
  return (
    <div className={styles.tagsWrapper}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} {...rest} />
      ))}
    </div>
  );
};

function Tag({ tag, textColor, dotColor, backgroundColor }) {
  return (
    <div
      className={`${styles.wrapper} ${dotColor ? styles.postTag : ""}`}
      style={{ color: textColor, backgroundColor }}
    >
      <div className={styles.dot} style={{ backgroundColor: dotColor }} />
      {tag}
    </div>
  );
}

export default Tags;
