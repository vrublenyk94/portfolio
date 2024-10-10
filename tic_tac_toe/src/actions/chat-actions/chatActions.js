import { createAction } from "@reduxjs/toolkit";

export const handleSendMessage = createAction('CHAT/SEND_MESSAGE', (inputValue, player)=> {
    const newMessage = {
        message: inputValue,
        sender: player,
        time: new Date().toLocaleTimeString('en-US', { hour12: false })
    };
    return {
        payload: newMessage
    }
});

export const handleKeyPress = createAction('CHAT/SEND_BY_ENTER', (event, inputValue, player) => {
    if(event.code === "Enter") {
        return {
            payload: {inputValue, player}
        }
    }
    return {
        payload:{}
    }
});