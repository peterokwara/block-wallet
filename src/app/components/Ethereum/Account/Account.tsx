import React from "react";
import "./Account.scss";
import { AccountProps } from "./AccountProps";
import { ReactComponent as AccountImage } from "../../../../assets/account-icon.svg";

/**
 * Component that returns account details.
 * @param param0 Attributes to be passed on to the account labels.
 * @returns An account component.
 */
export const Account: React.FunctionComponent<AccountProps> = ({ publicAddress}) => {
    return (
        <div className="account">
            <AccountImage className="account-image" />
            <div className="account-details">
                <p className="account-name"> Account 1</p>
                <p className="account-address">{publicAddress}</p>
            </div>
        </div>
    );
};
