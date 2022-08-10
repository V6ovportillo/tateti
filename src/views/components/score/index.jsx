import "./index.scss";

const Score = ({score}) => {
    return (
        <div id="score" className="score">
            <div className="container">
                <div className="score-jugador-x">{score[0]}</div>
                <div className="score-jugador-o">{score[1]}</div>
            </div>
        </div>
    );
}

export default Score;