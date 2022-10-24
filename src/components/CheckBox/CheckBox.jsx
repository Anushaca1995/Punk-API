import "./CheckBox.scss"

const Checkbox = (props) => {
    const {highAlcohol, handleABV, title} = props;
    console.log("ABV ="+highAlcohol);
    return (
        <form className="checkbox">
            <label> {title}
            <input className="checkbox__input"
                type="checkbox"
                id='highAlcohol'
                value={highAlcohol}
                onClick={handleABV}
            /> </label>
        </form>
    )
}

export default Checkbox;