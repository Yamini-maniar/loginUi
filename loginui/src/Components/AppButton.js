function AppButton({onClickSubmit}){

    const handleClick = (event) => {
        onClickSubmit(event.target.value); // Update the state with the new value
    };

    return(
        <div className="App-button">
            <button type="submit" onClick={handleClick}>Submit</button>
        </div>
    )
}

export default AppButton;

