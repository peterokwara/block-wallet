import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Layout/Header/Header";
import { Account } from "../../components/Ethereum/Account/Account";
import { AccountInfo } from "../../components/Ethereum/AccountInfo/AccountInfo";
import { Transaction } from "../../components/Ethereum/Transaction/Transaction";
import defaults from "../../../utils/constants";
import "./Home.scss";
import { PriceHelper } from "../../../utils/priceHelper";
import AppContext from "../../../context/background/AppContext";

/**
 * Component that shows the home page.
 * @returns Home page.
 */
export const Home: React.FunctionComponent = () => {
    // Load state
    const { state } = useContext(AppContext);
    const transactions = state.transactions;

    // Format the prices.
    const priceHelper = new PriceHelper();
    const accountBalance: number = priceHelper.ethPrice(defaults.accountBalance);
    const ethPrice: number = priceHelper.usdPrice(defaults.accountBalance, defaults.ethPrice);

    // Navigation
    const navigate = useNavigate();

    /**
     * Navigate to the next page
     */
    const onClickSend = () => {
        navigate("/send");
    };

    return (
        <div className="home">
            <Header>
                <Account publicAddress={defaults.publicAddress} />
            </Header>
            <div className="content">
                <AccountInfo accountBalance={accountBalance} ethPrice={ethPrice} onClickSend={() => onClickSend()} />
                <br />
                {transactions.map(pay => {
                    return (
                        <div>
                            <Transaction key={pay.id} value={pay.value} date={pay.date} />
                            <hr className="line" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
