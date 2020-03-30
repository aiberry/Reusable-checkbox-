import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Checkbox.module.css";

export default function Checkbox({
  name,
  isChecked,
  clickCallback,
  isEnabled = true
}) {
  const setMark = event => {
    if (
      isEnabled &&
      clickCallback &&
      (event.keyCode === 32 || event.type === "click")
    ) {
      // 32 - space
      clickCallback();
    }
  };

  return (
    <span className={styles.container}>
      <label htmlFor={name.toLowerCase()}>
        <input
          tabIndex="-1"
          type="checkbox"
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          checked={isChecked}
          onClick={setMark}
        />
        <span
          tabIndex="-1"
          className={`${styles.checkmark} ${
            isEnabled ? styles.checkmarkEnabled : styles.checkmarkDisabled
          }`}
        ></span>
        <span
          tabIndex="1"
          onKeyDown={setMark}
          className={`${styles.shadowArea} ${
            isChecked ? styles.shadowAreaMarked : styles.shadowAreaUnmarked
          }`}
        ></span>
        {name}
      </label>
    </span>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  clickCallback: PropTypes.func,
  isEnabled: PropTypes.bool
};
