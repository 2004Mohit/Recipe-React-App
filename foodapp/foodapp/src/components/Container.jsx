//It is not a Functional Component, It is a Structural Component.
/*Structural Component : Structural Component provides structure to our Application and not kind of Functionality.*/

import styles from "./container.module.css";

export default function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
