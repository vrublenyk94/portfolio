import { useSelector } from "react-redux";

import './header.css'

const Header = () => {

    const {winsX, winsO} = useSelector(state => state.game.score)
    return (
        <div className="header">
            <h3 className="header__subtitle">Player 1</h3>
            <div className="header__wrapper">
                <h2 className="header__score">Score: {winsO} : {winsX}</h2>
                <button className="header__button--reset" >Reset</button>
            </div>
            <h3 className="header__subtitle">Player 2</h3>
        </div>
    )
}

export default Header;
