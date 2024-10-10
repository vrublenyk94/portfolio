import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from "../../slices/chat/chatSlice";
import { handleSendMessage, handleKeyPress } from "../../actions/chat-actions/chatActions";

import chatO from '../../assets/chat-o.svg';
import chatX from '../../assets/chat-x.svg'
import './chat.css'

const Chat = ({player}) => {

    const dispatch = useDispatch();
    const messages = useSelector(state => state.chat.messages);
    const inputValue = useSelector(state => state.chat.inputValue);

    const isPlayer = player === 'Player X'? 'Player 2': 'Player 1';
    const isPlayerIcon = player === 'Player X'? chatX : chatO;

    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__header-img" style={{background: `url(${isPlayerIcon}) center no-repeat`, backgroundColor: 'rgb(69, 69, 69)'}}></div>
                <span>{isPlayer}</span>
            </div>
            <div className="chat__body">
                <div className="chat__area">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat__message ${message.sender=== player ? 'mine__message' : 'friends__message'}`}>
                            <div className={`message__cover  ${message.sender=== player ? 'message__cover--green' : 'message__cover--grey'} `}>
                                {message.message}
                                <span className='message__cover-time'>{message.time.slice(0, -3)}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <label className="chat__label">
                    <input 
                        type="text" 
                        className="chat__input" 
                        placeholder='Message' 
                        value={inputValue}
                        onChange={(evt) => dispatch(setInputValue(evt.target.value))}
                        onKeyDown={(evt) => {
                            if (evt.key === 'Enter') {
                                dispatch(handleKeyPress( evt,inputValue, player));
                            }
                        }}
                    />
                    <button 
                        className="chat__input-send"
                        onClick={() => dispatch(handleSendMessage(inputValue, player))}
                    />
                </label>
            </div>
            
        </div>
    );
}

export default Chat;