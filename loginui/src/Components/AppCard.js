import AppButton from "./AppButton";
import AppInput from "./AppInput";

function AppCard(){
    return(
        <div className="CardStyle">
            <div className="Card-main">
                <AppInput/>
                <AppButton/>
            </div>
        </div>
    )
}

export default AppCard;