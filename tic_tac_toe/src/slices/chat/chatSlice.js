import { createSlice } from '@reduxjs/toolkit';
import { handleKeyPress, handleSendMessage } from '../../actions/chat-actions/chatActions';

const initialState = {
    messages: [],
    inputValue : ''
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers : {
        setMessages(state, actions) {
            state.messages = actions.payload
        },
        setInputValue(state, actions) {
            state.inputValue = actions.payload
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(handleSendMessage, (state, action) => {
                state.messages.push(action.payload)
                state.inputValue = '';
            })
            .addCase(handleKeyPress, (state, action) => {
                const {inputValue, player} = action.payload;
                state.messages.push({
                    message: inputValue,
                    sender: player,
                    time: new Date().toLocaleTimeString('en-US', { hour12: false })
                });
                state.inputValue = '';
            })
    }
})

export const {setMessages, setInputValue} = chatSlice.actions;

export default chatSlice.reducer;