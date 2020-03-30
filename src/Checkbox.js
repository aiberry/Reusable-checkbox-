import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Checkbox.module.css";

export default function Checkbox({
  name,
  isChecked,
  handlePress,
  isEnabled=true,
  isFocused,
  isHovered
}) {
  const handleClick = () => {
    if (isEnabled) {
      handlePress();
    }
  };

  return (
    <span className={styles.container}>
      <label for={name.toLowerCase()}>
        <input
          type="checkbox"
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          checked={isChecked}
          onClick={handleClick}
          className={styles.checkBox}
        /> 
        <span className={`${styles.checkmark} ${isEnabled ? styles.checkmarkEnabled : styles.checkmarkDisabled}`}></span>
        {name}
      </label>
    </span>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  handlePress: PropTypes.func,
  isEnabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool
};
