function AppInput({name,value,onChangeValue,inputLabel,isPassword=false,placeholder}) {

    const handleChange = (event) => {
        onChangeValue(event.target.value); // Update the state with the new value
    };

    return (
        <div>
            <form class="App-input flex flex-col justify-center">
                <label class="Labelstyle text-gray-700 text-sm mb-1 font-medium font-sans">{inputLabel}</label>
                <input name={name} value={value} onChange={handleChange} placeholder={placeholder} type={isPassword ? "password" : "text"} class="Inputstyle border border-gray-400 rounded-md text-sm text-gray-800 font-light font-sans"/>
            </form>
        </div>
    )
}

export default AppInput;