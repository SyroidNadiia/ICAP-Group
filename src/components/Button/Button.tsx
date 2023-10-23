import React, { ReactNode, MouseEvent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  width,
  height,
  ...rest
}) => {
  return (
    <button
      className={styles.buttonStyled}
      type={type}
      onClick={onClick}
      style={{ width, height }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
