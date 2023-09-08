import * as React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch } from "@mui/core/SwitchUnstyled";

const BasicSwitchRoot = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
  background: #e5e5e5;
  border-radius: 12px;
  cursor: pointer;

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: #202745;
  }
`;

const BasicSwitchInput = styled("input")`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const BasicSwitchThumb = styled("span")`
  display: block;
  width: 18px;
  height: 18px;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  background-color: #fff;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: 25px;
    top: 3px;
    background-color: #fff;
  }
`;

function BasicSwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    "Switch-checked": checked,
    "Switch-disabled": disabled,
    "Switch-focusVisible": focusVisible,
  };

  return (
    <BasicSwitchRoot className={clsx(stateClasses)}>
      <BasicSwitchThumb className={clsx(stateClasses)} />
      <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
    </BasicSwitchRoot>
  );
}

export default function UseSwitchesBasic() {
  return (
    <div>
      {/* <BasicSwitch defaultChecked /> */}
      <BasicSwitch />
      {/* <BasicSwitch defaultChecked disabled />
      <BasicSwitch disabled /> */}
    </div>
  );
}
