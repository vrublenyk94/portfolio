import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame, setDisabled } from "../../slices/game/gameSlice";
import { checkWinner, checkNextMove,setSquareValue, updateScore } from "../../actions/game-actions/gameActions";
import Square from "../square/square";
import Strike from "../strike/strike";
import X from '../../assets/x.png';
import O from '../../assets/o.png';
import './board.css';

const Board = ({player}) => {
    const dispatch = useDispatch();
    const squares = useSelector(state => state.game.squares);
    const isNextX = useSelector(state => state.game.isNextX);
    const isFull = useSelector(state => state.game.isFull);
    const winner = useSelector(state => state.game.isWinner);
    const prevScore = useSelector(state => state.game.score);
    const disabled = useSelector(state => state.game.disabled);

    let info;
    if (winner) {
        info = winner === player ? "You Win" : "You Lost";
    } else if (isFull) {
        info = "Draw!";
    } else {
        info = (isNextX && player === 'Player X') || (!isNextX && player === 'Player O') ? "Your turn." : "Wait for your opponent.";
    }
    useEffect(() => {
        dispatch(checkNextMove(squares));
        let winnerResult = dispatch(checkWinner(squares, X, O));
        if (winnerResult.payload.isWinner && disabled) {
            dispatch(setDisabled(true));
            dispatch(updateScore(prevScore, winnerResult.payload.isWinner, player));
            setTimeout(() => {
                dispatch(resetGame());
            }, 3000);
        }
        if (isFull) {
            setTimeout(() => {
                dispatch(resetGame());
            }, 3000);
        }
    }, [squares, isFull, dispatch, disabled]);
    
    useEffect(() => {
        dispatch(setDisabled((player === "Player X" && isNextX) || (player === "Player O" && !isNextX)))
    }, [ isNextX, dispatch]);

    const handleSquareClick = (i) =>  {
        if ((player === "Player X" && isNextX) || (player === "Player O" && !isNextX)) {
            dispatch(setSquareValue(squares, i, isNextX, X, O ));        
        }
    };

    return (
        <div className="board">
            <Strike/>
            <h1 className="board__title"style={winner?winner === player ? {color:'rgb(0, 174, 28)'}:{color:'rgb(255, 86, 32)'}: {color: 'rgb(239, 153, 25)'}}>{squares.find((item) => item !== null) ? info : `Game started! ${info}`}</h1>
            <div className="board__playground">
                {squares.map((square, index) => (
                    <div className="border__wrapper--square" key={index}>
                        <Square value={square} setSquareValue={() => handleSquareClick(index)} disabled={disabled} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;