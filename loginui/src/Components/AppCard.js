import { useState } from "react";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

function AppCard(){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [userInfo,setUserInfo]=useState({user:null,pass:null})

    console.log('user',username,password)
    const onSubmit=()=>{

        setUsername('')
        setPassword('')
        setUserInfo({
            user:username,
            pass:password
        })
       
    }

    console.log('info',userInfo)
    return(
        <div className="CardStyle">
            <div className="Card-main">
                <AppInput name={'username'} value={username} onChangeValue={(val)=>setUsername(val)} inputLabel={'Username'}/>
                <AppInput name={'password'} value={password} onChangeValue={(val)=>setPassword(val)} inputLabel={'Password'} isPassword={true}/>
                <AppButton onClickSubmit={onSubmit} title={'Submit'}/>
            </div>
        </div>
    )
}

export default AppCard;