import "./index.scss";

//Aqui se escribe X o O dependiendo de el jugador
const Square = ({ value, onClick, turn, winner }) => {

    const handleClick = () => {
        turn !== null && value === null && onClick();
    }
    const classNamesSquare = () => {
        var result = "square";
        result += (value ? " " + value : "");
        result += (winner ? " winner" : "");
        return result;
    }

    return (
        <div className={classNamesSquare()} onClick={() => handleClick()}>
        </div>
    );
}

export default Square;