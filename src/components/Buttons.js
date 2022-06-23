function Buttons(props) {
    return ( <>
        <button onClick={() => props.addFunc("1")}>1</button>
        <button onClick={() => props.addFunc("2")}>2</button>
        <button onClick={() => props.addFunc("3")}>3</button>
        <button onClick={() => props.addFunc("4")}>4</button>
        <br/>
        <button onClick={() => props.addFunc("5")}>5</button>
        <button onClick={() => props.addFunc("6")}>6</button>
        <button onClick={() => props.addFunc("7")}>7</button>
        <button onClick={() => props.addFunc("8")}>8</button>
        <br/>
        <button onClick={() => props.addFunc("9")}>9</button>
        <button onClick={() => props.addFunc("0")}>0</button>
        <button onClick={() => props.addFunc("+")}>+</button>
        <button onClick={() => props.addFunc("-")}>-</button>
        <br/>
        <button onClick={() => props.addFunc("*")}>*</button>
        <button onClick={() => props.addFunc("/")}>/</button>
        <button onClick={() => props.addFunc("=")}>=</button>
        <button onClick={() => props.addFunc("CE")}>CE</button>
    </> );
}

export default Buttons;