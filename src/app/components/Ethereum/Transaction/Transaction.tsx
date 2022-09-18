import React from "react";
import { TransactionProps } from "./TransactionProps";
import "./Transaction.scss";

import { ReactComponent as EthereumIcon } from "../../../../assets/ethereum-icon.svg";
import { PriceHelper } from "../../../../utils/priceHelper";
import defaults from "../../../../utils/constants";

/**
 * Component that shows the user's individual transactions.
 * @param param0 Attributes to be passed on to the labels for transactions.
 * @returns A single transaction.
 */
export const Transaction: React.FunctionComponent<TransactionProps> = ({ date, value }) => {
    // Format the prices.
    const priceHelper = new PriceHelper();
    const ethPrice: number = priceHelper.usdPrice(value, defaults.ethPrice);

    return (
        <div className="transaction">
            <EthereumIcon className="ethereum-icon" />
            <div className="transaction-info">
                <div className="transaction-details">
                    <p className="event">Send Ether</p>
                    <p className="timestamp">{date}</p>
                </div>
                <div className="amount-details">
                    <p className="amount-eth">3 ETH</p>
                    <p className="amount-usd">${ethPrice}</p>
                </div>
            </div>
        </div>
    );
};
