import { useState } from "react";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

function AppCard({children}){
    
    return(
        <div class="CardStyle flex justify-center items-center">
            <div class="Card-main flex flex-col p-5 w-full max-w-[300px] bg-gray-600 rounded-lg box-border gap-4">
                {children}
            </div>
        </div>
    )
}

export default AppCard;