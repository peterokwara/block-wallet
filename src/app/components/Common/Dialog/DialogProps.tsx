import { DialogHTMLAttributes, DetailedHTMLProps, MouseEvent } from "react";

/**
 * The properties for the dialog prop.
 */
export interface DialogProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
    /**
     * State whether the dialog is open or closed.
     */
    open: boolean;

    /**
     * Event when mouse is clicked, returns a void function.
     */
    onClose: (event: MouseEvent<HTMLButtonElement>) => void;

    /**
     * Content of the dialog box
     */
    content: string;
}
