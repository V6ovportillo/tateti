import Square from "../square";
import "./index.scss";

const Board = ({ squares, onClick, turn, winnerSquares }) => {

    const createSquares = values => (
        values.map(value => (
            <Square
                value={squares[value]}
                key={`square_${value}`}
                onClick={() => onClick(value)}
                turn={turn}
                winner={winnerSquares.includes(value)}
            />
        ))
    );
    return (
        <div id="board" className="board">
            <div className="container">
                <div className="row">
                    {createSquares([0, 1, 2])}
                </div>
                <div className="row">
                    {createSquares([3, 4, 5])}
                </div>
                <div className="row">
                    {createSquares([6, 7, 8])}
                </div>
            </div>
        </div>
    );
}

export default Board;