import React from "react";

import styles from "./style.module.css";

import Twitter from "../../../../assets/twitter.svg";
import Linkedin from "../../../../assets/linkedin.svg";
import Discord from "../../../../assets/discord.svg";


const SocialShareSection = ({ minutesToRead,twitter,linkedin }) => {
  return (
    <aside className={styles.wrapper}>
      <p className={styles.text}>{minutesToRead} min read</p>

      <div>
        <p className={styles.text}>SHARE</p>

        <div className={styles.shareWrapper}>
          <a href={twitter} target="_blank">
            <img src={Twitter} alt="Twitter share button" />
          </a>
{/*           <a href={linkedin} target="_blank">
            <img src={Linkedin} alt="Twitter share button" />
          </a>
          <a href="https://discord.com/invite/szqhfekbTy" target="_blank">
            <img src={Discord} alt="Twitter share button" />
          </a> */}
        </div>
      </div>
    </aside>
  );
};

export default SocialShareSection;
