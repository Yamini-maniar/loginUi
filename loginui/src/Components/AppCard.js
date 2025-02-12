import { useState } from "react";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

function AppCard({children}){
    
    return(
        <div className="CardStyle">
            <div className="Card-main">
                {children}
            </div>
        </div>
    )
}

export default AppCard;