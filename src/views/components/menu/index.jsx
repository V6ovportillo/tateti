import "./index.scss";

const Menu = ({ playAgain }) => {
    const handleClick = (e) => {
        playAgain();
    }

    return (
        <div id="menu" className="menu">
            <button className="play-again" onClick={() => handleClick()}>Play Again</button>
        </div>
    );
}

export default Menu;