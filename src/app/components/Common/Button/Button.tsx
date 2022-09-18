import React from "react";
import { ButtonProps } from "./ButtonProps";
import "./Button.scss";

/**
 * Component that displays a button
 * @param props Attributes to be passed on to the button.
 * @returns A button component.
 */
export const Button: React.FunctionComponent<ButtonProps> = props => {
    return <button className="button" {...props}>{props.children}</button>;
};
