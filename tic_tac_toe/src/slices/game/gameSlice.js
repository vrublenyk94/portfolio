import { createSlice } from '@reduxjs/toolkit';
import { checkNextMove, checkWinner, setSquareValue, updateScore } from '../../actions/game-actions/gameActions';

const initialState = {
    squares: Array(9).fill(null),
    isNextX: true,
    isWinner: null,
    isFull: false,
    score: {winsX: 0, winsO:0},
    strikeClass: null,
    disabled: false
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setSquares(state, actions) {
            state.squares = actions.payload
        },
        setIsNextX(state, action) {
            state.isNextX = action.payload
        },
        setIsFull(state, action) {
            state.isFull = action.payload;
        },
        setScore(state, action) {
            const { winsX, winsO } = action.payload;
            state.score = { winsX, winsO };
        },
        setStrikeClass(state, action) {
            state.strikeClass = action.payload
        },
        setIsWinner(state, action) {
            state.isWinner = action.payload
        },
        setDisabled(state, actions) {
            state.disabled = actions.payload
        },
        resetGame(state) {
            state.squares = Array(9).fill(null);
            state.isNextX = true;
            state.isWinner = null;
            state.isFull = false;
            state.strikeClass = null;
        }
    },
    extraReducers: (builder) => {
        builder 
        .addCase(checkNextMove, (state, action) => {
            state.isFull = action.payload.isFull;
        })
        .addCase(setSquareValue, (state, action) => {
            const { squares, isNextX } = action.payload;
            state.squares = squares;
            state.isNextX = isNextX;
        })
        .addCase(updateScore, (state, action) => {
            const { winsX, winsO, isWinner } = action.payload;
            if (isWinner === 'Player X') {
                state.score.winsX = winsX;
            } else if (isWinner === 'Player O') {
                state.score.winsO = winsO;
            }
        })

        .addCase(checkWinner, (state, action) => {
            const { isWinner, strikeClass } = action.payload;
            state.isWinner = isWinner;
            state.strikeClass = strikeClass;
        });
    }
})

export const {
    resetGame,
    setDisabled
} = gameSlice.actions;
  
export default gameSlice.reducer;