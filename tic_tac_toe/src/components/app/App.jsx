import { Provider } from 'react-redux'; 
import Board from '../board/board';
import Header from '../header/header';
import Chat from '../chat/chat';
import store from '../../reducer';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="app__playground">
          <div className="app__playground-wrapper">
            <Board
              player={"Player O"}
            />
            <Chat
              player={'Player O'}
            />
          </div>
          <div className="app__playground-wrapper">
            <Board
              player={"Player X"}
            />
            <Chat
              player={'Player X'}
            />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
