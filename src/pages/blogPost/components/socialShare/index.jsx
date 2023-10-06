import React from "react";

import styles from "./style.module.css";

import Twitter from "../../../../assets/twitter.svg";
import Linkedin from "../../../../assets/linkedin.svg";
import { LinkedinShareButton } from "react-share";
// import Discord from "../../../../assets/discord.svg";

/**
 * 
 * @param {{ post: typeof import('../../../../utils/blog.json')[0]}} param0 
 * @returns 
 */
const SocialShareSection = ({ post }) => {
  const { minutesToRead, twitter, title, subtitle } = post;

  return (
    <aside className={styles.wrapper}>
      <p className={styles.text}>{minutesToRead} min read</p>

      <div>
        <p className={styles.text}>SHARE</p>

        <div className={styles.shareWrapper}>
          <a href={twitter} target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter share button" />
          </a>

          <LinkedinShareButton url={window.location.href} title={title} summary={subtitle}>
            <img src={Linkedin} alt="LinkedIn Share Button" />
          </LinkedinShareButton>

          {/* <a href="https://discord.com/invite/szqhfekbTy" target="_blank">
            <img src={Discord} alt="Twitter share button" />
          </a> */}
        </div>
      </div>
    </aside>
  );
};

export default SocialShareSection;
