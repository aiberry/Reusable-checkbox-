import React, { useState } from "react";
import styles from "./styles/App.module.css";
import Checkbox from "./Checkbox.js";

export default function App() {
  const [targetCheckboxState, setTargetCheckboxState] = useState({
    isEnabled: true,
    isChecked: true
  });
  const [enableCheckboxState, setEnableCheckboxState] = useState({
    isChecked: false
  });

  const onHandleDisable = e => {
    setTargetCheckboxState({
      ...targetCheckboxState,
      isEnabled: !targetCheckboxState.isEnabled
    });
    setEnableCheckboxState({
      ...enableCheckboxState,
      isChecked: !enableCheckboxState.isChecked
    });
  };
  return (
    <div className={styles.wrap}>
      <h1>Checkboxes</h1>
      <Checkbox
        name="Target checkbox"
        isEnabled={targetCheckboxState.isEnabled}
        isFocused={false}
        isHovered={false}
        isChecked={targetCheckboxState.isChecked}
        clickCallback={() =>
          setTargetCheckboxState({
            ...targetCheckboxState,
            isChecked: !targetCheckboxState.isChecked
          })
        }
      />
      <Checkbox
        name="Disable target"
        isChecked={enableCheckboxState.isChecked}
        clickCallback={onHandleDisable}
      />
      <h2>Unckecked</h2>
      <Checkbox name="Unchecked Disable" isChecked={false} isEnabled={false} />
      <h2>Checked</h2>
      <Checkbox name="Enable" isChecked={true} />
      <Checkbox name="Checked Disable" isChecked={true} isEnabled={false} />
    </div>
  );
}
