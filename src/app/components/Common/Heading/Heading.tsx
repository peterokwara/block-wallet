import React from "react";
import { HeadingProps } from "./HeadingProps";
import "./Heading.scss";

/**
 * Component that returns a heading label.
 * @param param0 Attributes to be passed on to the label.
 * @returns A heading.
 */
export const Heading: React.FunctionComponent<HeadingProps> = ({ title }) => {
    return (
        <label className="heading" htmlFor="">
            {title}
        </label>
    );
};
