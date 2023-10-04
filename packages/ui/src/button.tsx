import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className="p-4 bg-blue-400" type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
