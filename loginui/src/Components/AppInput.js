function AppInput({name,value,onChangeValue,inputLabel,isPassword=false,placeholder}) {

    const handleChange = (event) => {
        onChangeValue(event.target.value); // Update the state with the new value
    };

    return (
        <div>
            <form className="App-input">
                <label className="Labelstyle">{inputLabel}</label>
                <input name={name} value={value} onChange={handleChange} placeholder={placeholder} type={isPassword ? "password" : "text"} className="Inputstyle"/>
            </form>
        </div>
    )
}

export default AppInput;