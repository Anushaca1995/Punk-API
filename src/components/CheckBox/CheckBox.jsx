import "./CheckBox.scss"

const Checkbox = (props) => {
    const {checkInput, handleInput, title} = props;
    return (
        <form className="checkbox">
            <label> {title}
            <input className="checkbox__input"
                type="checkbox"
                id='highAlcohol'
                value={checkInput}
                onClick={handleInput}
            /> </label>
        </form>
    )
}

export default Checkbox;