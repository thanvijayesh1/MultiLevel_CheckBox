import './../App.css';

function CheckBox(props) {
    const { name, value, label, onClick, id,className } = props
    return (
        <div className="App1">
            <input type="checkbox"
                id={id}
                name={name}
                value={value}
                checked={value}
                className={className}
                onClick={(e) => {
                    onClick(e.target.checked)
                }} />
            <label
                for={name}
            > {label}
            </label>
        </div>
    );
}

export default CheckBox;
