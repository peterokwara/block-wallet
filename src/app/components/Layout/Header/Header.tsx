import React from "react";
import { HeaderProps } from "./HeaderProps";
import "./Header.scss";

/**
 * Component that returns a header.
 * @param param0 Attributes to be passed on to the labels.
 * @returns A header.
 */
export const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
    return (
        <>
            <header className="header">
                <div className="heading-content">{children}</div>
                <hr className="line" />
            </header>
        </>
    );
};
