import React from "react";
import "./ExternalLink.scss";
import { ExternalLinkProps } from "./ExternalLinkProps";

/**
 * Component that displays an external link.
 * @param param0 Attributes to be passed on to the link.
 * @returns An external link.
 */
export const ExternalLink: React.FunctionComponent<ExternalLinkProps> = ({ content, externalLink }) => {
    return (
        <>
            <a href={externalLink} className="link">
                {content}
            </a>
        </>
    );
};
