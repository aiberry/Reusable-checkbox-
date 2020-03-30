import React, { useState } from "react";
import styles from "./styles/App.module.css";
import Checkbox from "./Checkbox.js";

export default function App() {
  const [targetCheckboxState, setTargetCheckboxState] = useState({ isEnabled: true, isChecked: true });
  const [enableCheckboxState, setEnableCheckboxState] = useState({ isChecked: false });
  
  const onHandleDisable = (e) => {
    setTargetCheckboxState({
        ...targetCheckboxState,
        isEnabled: !targetCheckboxState.isEnabled
      });
    setEnableCheckboxState({ ...enableCheckboxState,
        isChecked: !enableCheckboxState.isChecked})
  }
  return (
    <div className={styles.wrap}>
      <h1>Checkboxes</h1>
      
        <Checkbox
          name="Target checkbox"
          isEnabled={targetCheckboxState.isEnabled}
          isFocused={false}
          isHovered={false}
          isChecked={targetCheckboxState.isChecked}
          handlePress={() =>
            setTargetCheckboxState({
              ...targetCheckboxState,
              isChecked: !targetCheckboxState.isChecked
            })
          }
        />

      <Checkbox
          name="Disable"
          isChecked={enableCheckboxState.isChecked}
          handlePress={onHandleDisable}
        />
    </div>
  );
}
