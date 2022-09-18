import React, { MouseEvent } from "react";
import "./Success.scss";
import { Button } from "../../components/Common/Button/Button";
import { ExternalLink } from "../../components/Common/ExternalLink/ExternalLink";
import { Footer } from "../../components/Layout/Footer/Footer";
import { Heading } from "../../components/Common/Heading/Heading";
import { ReactComponent as SuccessImage } from "../../../assets/crypto-flowers.svg";
import { useNavigate } from "react-router-dom";

/**
 * Component that shows the success page.
 * @returns The success page.
 */
export const Success: React.FunctionComponent = () => {
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

    return (
        <div className="success">
            <div className="content">
                <div className="content-container">
                    <SuccessImage className="success-image" />
                    <Heading title="Success." />
                    <p className="body-text">You've successfully sent your funds.</p>
                    <ExternalLink content="View on Etherscan" externalLink="https://rinkeby.etherscan.io/" />
                </div>
            </div>
            <Footer>
                <Button onClick={event => onClickCancel(event)}>Cancel</Button>
            </Footer>
        </div>
    );
};
