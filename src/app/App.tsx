import React from "react";
import AppState from "../context/background/AppState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { SendEther } from "./routes/SendEther/SendEther";
import { Success } from "./routes/Success/Success";

const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <AppState>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/send" element={<SendEther />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </AppState>
        </BrowserRouter>
    );
};

export default App;
