

import Board from "./../../components/board";
import ScoreBoard from "./../../components/scoreBoard";
import { useState } from "react";

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const Game = () => {

    //Inicio
    const [turn, setTurn] = useState('x');
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [score, setScore] = useState({
        x: 0,
        o: 0
    });
    const [winnerSquares, setWinnerSquares] = useState([]);

    //Intermedio
    const handleClick = square => {
        let newSquares = [...squares];
        newSquares.splice(square, 1, turn);
        setSquares(newSquares);
        checkForWinner(newSquares);
    }
    
    const checkForWinner = newSquares => {
        //Chequear un ganador
        for (let i = 0; i < winningPositions.length; i++) {
            let [a, b, c] = winningPositions[i];
            if (newSquares[a] != null && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
                endGame(newSquares[a], winningPositions[i]);
                return;
            }
        }

        //Chequear empate
        //Investigar : Array.from(Array(10).keys()
        //R: Array.from genera un array en base a lo que se le pase por parámetro. Array(10).keys() genera un iterator que devuelve las claves de un array de 10 lugares. 
        if (!newSquares.includes(null)) {
            endGame(null, Array.from(Array(10).keys()));
            return;
        }

        setTurn(turn === "x" ? "o" : "x")
    }

    //Final
    const endGame = (result, winningPositions) => {
        setTurn(null);
        if (result !== null) {
            setScore({
                ...score,
                [result]: score[result] + 1,
            });
        }
        console.log(winningPositions)
        setWinnerSquares(winningPositions);
        setTimeout(reset, 2500);
    }

    const reset = () => {
        setTurn('x');
        setSquares(Array(9).fill(null));
        setWinnerSquares([]);
    }

    return (
    <div className="game">
        <Board winnerSquares={winnerSquares} turn={turn} squares={squares} onClick={handleClick} />
        <ScoreBoard scoreX={score.x} scoreO={score.o} />
    </div>
    );
}

export default Game;