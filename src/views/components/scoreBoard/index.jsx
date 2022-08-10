import "./index.scss";

const ScoreBoard = ({scoreX, scoreO}) => {

    return (
        <div id="score-board" className="score-board">
            <div className="container">
                <div className="score-jugador-x">{scoreX}</div>
                <div className="score-jugador-o">{scoreO}</div>
            </div>
        </div>
    );
}

export default ScoreBoard;