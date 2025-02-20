function AppButton({onClickSubmit,title}){

    const handleClick = (event) => {
        onClickSubmit(event.target.value); // Update the state with the new value
    };

    return(
        <div class="App-button flex justify-center mt-2">
            <button type="submit" onClick={handleClick} class="Buttonstyle rounded-md border border-solid px-3 py-1.5 text-sm font-sans text-iceblue bg-[#04316B] uppercase font-medium">{title}</button>
        </div>
    )
}

export default AppButton;

