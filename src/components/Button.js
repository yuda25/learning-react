const Button = (props) => {
    return (
        <div>
            <button onClick={() => props.clicked()}>klik aja</button>
        </div>
    )
}

export default Button;