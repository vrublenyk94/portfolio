import { createAction } from "@reduxjs/toolkit";

export const checkNextMove = createAction('GAME/CHECK_NEXT_MOVE', (squares) => {
    let newSquares = squares.filter(item => item !== null);
    const fullSquare = 9;
    if(newSquares.length === fullSquare) {
        return {
            payload: {
                isFull:true
            }
        }
    }

    return {
        payload: {}
    }
})

export const setSquareValue = createAction('GAME/SET_SQUARE_VALUE', (squares, i, isNextX, X, O) => {
    const newSquares = [...squares];
    newSquares[i] = isNextX ? X : O;
    return {
        payload: {
            isNextX: !isNextX,
            squares: newSquares,
        }
    }
})

export const updateScore = createAction('GAME/UPDATE_SCORE', (prevScore, winner, player) => {
    let newWinsX = prevScore.winsX;
    let newWinsO = prevScore.winsO;
    let isWinner;

    if (winner === 'Player X' && player === 'Player X') {
        newWinsX++;
        isWinner = 'Player X'
    }
    if (winner === 'Player O' && player === 'Player O') {
        newWinsO++;
        isWinner = 'Player O'
    }
    return {
        payload: {
            isWinner,
            winsX: newWinsX, 
            winsO: newWinsO, 
        }
        
    };
}) 

export const checkWinner = createAction('GAME/CHECK_WINNER', (squares, X, O) => {
    const winnerCombinations = [
        {combo : [0, 1, 2], strikeClass: 'strike-row-1'},
        {combo : [3, 4, 5], strikeClass: 'strike-row-2'},
        {combo : [6, 7, 8], strikeClass: 'strike-row-3'},
        {combo : [0, 3, 6], strikeClass: 'strike-column-1'},
        {combo : [1, 4, 7], strikeClass: 'strike-column-2'},
        {combo : [2, 5, 8], strikeClass: 'strike-column-3'},
        {combo : [0, 4, 8], strikeClass: 'strike-diagonal-1'},
        {combo : [2, 4, 6], strikeClass: 'strike-diagonal-2'},
    ];

    for (let {combo, strikeClass} of winnerCombinations) {
        const [a,b,c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return {
                payload: {
                    isWinner: squares[a] === X ? 'Player X': 'Player O',
                    strikeClass: strikeClass
                }
            }
        }
    }
    return {
        payload: {
            isWinner: null,
            strikeClass: null
        }
    };
})