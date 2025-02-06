function AppInput({name,value,onChangeValue,inputLabel,isPassword=false}) {

    const handleChange = (event) => {
        onChangeValue(event.target.value); // Update the state with the new value
    };

    return (
        <div>
            <form className="App-input">
                <label>{inputLabel}</label>
                <input name={name} value={value} onChange={handleChange}  type={isPassword ? "password" : "text"}/>
            </form>
        </div>
    )
}

export default AppInput;