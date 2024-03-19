import React from "react";
import styles from "./morgue-header.scss";
import { GiMorgueFeet } from "react-icons/gi";

const MorgueIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <GiMorgueFeet className={styles.iconOverrides} />
    </div>
  );
};

export default MorgueIllustration;
