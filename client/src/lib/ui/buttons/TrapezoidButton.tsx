import React from "react";
import Button from "../../../components/ui/Button";
import "./TrapezoidButton.scss";
import classNames from "../../common/utils/classNames";

interface ITrapezoidButton {
  children: any;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const TrapezoidButton = ({
  children,
  className = "",
  onClick,
  
}: ITrapezoidButton) => {
  return (
    <Button
      classNames={classNames("trapezoid-button", className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default TrapezoidButton;
