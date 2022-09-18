import React, { ChangeEvent, useContext, useState, MouseEvent } from "react";
import { Button } from "../../components/Common/Button/Button";
import { InputField } from "../../components/Forms/InputField/InputField";
import { Footer } from "../../components/Layout/Footer/Footer";
import { Header } from "../../components/Layout/Header/Header";
import { Heading } from "../../components/Common/Heading/Heading";
import { Dialog } from "../../components/Common/Dialog/Dialog";
import { useNavigate } from "react-router-dom";
import "./SendEther.scss";
import AppContext from "../../../context/background/AppContext";
import defaults from "../../../utils/constants";
import { DateHelper } from "../../../utils/dateHelper";

/**
 * Component that shows the SendEther page.
 * @returns Send Ether page.
 */
export const SendEther: React.FunctionComponent = () => {
    const { state, addTransaction } = useContext(AppContext);
    const [address, setaddress] = useState("");
    const [amount, setamount] = useState("");

    // Modal
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState("");

    // Navigation
    const navigate = useNavigate();

    /**
     * Function to go back to the previous page.
     * @param event The event.
     */
    const onClickCancel = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/");
    };

    /**
     * Function to process the input.
     * @param event The event.
     */
    const onClickNext = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Show a dialog box in case amount is not enough.
        if (defaults.accountBalance < Number(amount)) {
            setOpen(true);
            setContent("Error! The amount to transfer is more that the account balance.");
            return;
        }

        // Show a dialog box in case there is no amount.
        if (!Number(amount)) {
            setOpen(true);
            setContent("Error! The amount to transfer is zero.");
            return;
        }

        const dateHelper = new DateHelper();
        const newTransaction = {
            id: state.transactions.length,
            to: address,
            from: defaults.publicAddress,
            value: Number(amount),
            date: dateHelper.currentDate()
        };
        addTransaction(newTransaction);
        defaults.accountBalance -= Number(amount);
        navigate("/success");
    };

    /**
     * Function to handle on change events on the amount change.
     * @param event The event.
     */
    const onHandleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(event.target.value);
        setamount(event.target.value);
    };

    /**
     * Function to handle on change events on the recipient input.
     * @param event The event.
     */
    const onHandleRecipientChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setaddress(event.target.value);
    };

    /**
     * Funtion to handle the modal closing.
     */
    const handleToClose = () => {
        setOpen(false);
    };

    return (
        <div className="send-ether">
            <Header>
                <Heading title="Send Ether" />
            </Header>
            <div className="content">
                <Dialog open={open} onClose={handleToClose} content={content} />
                <InputField
                    label="Amount to transfer"
                    placeholder="Enter amount to transfer"
                    onChange={event => onHandleAmountChange(event)}
                />
                <br />
                <InputField
                    label="Add Recipient"
                    placeholder="Enter Public Address"
                    onChange={event => onHandleRecipientChange(event)}
                />
            </div>
            <Footer>
                <Button onClick={event => onClickCancel(event)}>Cancel</Button>
                <Button onClick={event => onClickNext(event)}>Next</Button>
            </Footer>
        </div>
    );
};
