import React from "react";
import { FooterProps } from "./FooterProps";
import "./Footer.scss";

/**
 * Component that returns a footer.
 * @param param0 Attributes to be passed on to the footer.
 * @returns A footer.
 */
export const Footer: React.FunctionComponent<FooterProps> = ({ children }) => {
    return (
        <>
            <footer className="footer">
                <hr className="line" />
                <div className="buttons">{children}</div>
            </footer>
        </>
    );
};
