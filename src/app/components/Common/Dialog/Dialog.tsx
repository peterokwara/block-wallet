import React from "react";
import { DialogProps } from "./DialogProps";
import "./Dialog.scss";

/**
 * Component that displays a dialog box
 * @param props Attributes to be passed on to the button.
 * @returns A dialog component.
 */
export const Dialog: React.FunctionComponent<DialogProps> = ({ open, onClose, content }) => {
    return (
        <>
            <dialog open={open} id="dialog" className="dialog">
                <div className="dialog-details">
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                    <p>{content}</p>
                </div>
            </dialog>
        </>
    );
};
