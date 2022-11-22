import React from "react";
import { SuperInputText } from "../common/c1-SuperInputText/SuperInputText";
import { SuperCheckbox } from "../common/c3-SuperCheckbox/SuperCheckbox";
import { SuperButton } from "../common/c2-SuperButton/SuperButton";
import styles from "./componentTest.module.css";

export const ComponentsTest = () => {
  return (
    <div className={styles.componentTest__wrapper}>
      <div>
        <SuperInputText />
      </div>
      <div>
        <SuperCheckbox>Test</SuperCheckbox>
      </div>
      <div>
        <SuperButton>Button sample</SuperButton>
      </div>
    </div>
  );
};
