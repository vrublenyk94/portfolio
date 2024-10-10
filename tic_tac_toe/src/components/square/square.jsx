import './square.css'

const Square = ({value, setSquareValue}) => {
    return(
        <button className="square" onClick={setSquareValue} style={{background: `url(${value}) center no-repeat`}}></button>
    )
}

export default Square