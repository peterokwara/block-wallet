import React from "react";
import "./AccountInfo.scss";
import { AccountInfoProps } from "./AccountInfoProps";
import { ReactComponent as SendImage } from "../../../../assets/up-arrow.svg";

/**
 * Component that returns information about an account (balance)
 * @param param0 Attributes to be passed on to the labels.
 * @returns Account component with balance and a button to send.
 */
export const AccountInfo: React.FunctionComponent<AccountInfoProps> = ({ accountBalance, ethPrice, onClickSend }) => {
    return (
        <div className="account-info">
            <div className="account-details">
                <p className="account-amount-eth">{ethPrice} ETH</p>
                <p className="account-amount-usd">${accountBalance} USD</p>
                <button className="send-button" onClick={onClickSend}>
                    <SendImage className="send-image" />
                    <p className="send-text">Send</p>
                </button>
            </div>
        </div>
    );
};
