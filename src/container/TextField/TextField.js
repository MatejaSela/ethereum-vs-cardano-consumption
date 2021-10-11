import "./text-field.css";
import React, { useState } from "react";

const TextField = (props) => {

        // let explaningText = ```
        //     The Artano team has decided to shed some light on the consumption data of Ethereum and Cardano,
        //     and compare this data to an average Visa card electricity consumption using a simple formula. 
            
        //     The data on this page will be updated once a month, until we have an API
        //     with exact Ethereum and Cardano data on energy consumption.
        // ```

        // let assumptionsText = ```
        //     First a smiple explanation of how Cardano works. Cardano is a PoS (proof of stake) blockchain,
    //     and runs on stake pools, from which you can find minimum specs here <a>"ABC.com"</a>
        //     Since there is currently no official data, we will have to assume that everyone is using a 
        // ```
        
        return (
            <div className="wrapper">
                <p>The Artano team has decided to shed some light on the consumption data of Ethereum and Cardano,
            and compare this data to an average Visa card electricity consumption using a simple formula. 
            
            The data on this page will be updated once a month, until we have an API
            with exact Ethereum and Cardano data on energy consumption.</p>
            <br/>
                <p>First a smiple explanation of how Cardano works. Cardano is a PoS (proof of stake) blockchain,
            and runs on stake pools, from which you can find minimum specs here <a>ABC.com</a>
            Since there is currently no official data, we will have to assume that everyone is using a </p>
            </div>
        );    
    }
export default TextField;
