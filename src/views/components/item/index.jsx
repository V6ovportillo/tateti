import "./index.scss";

//Aqui se escribe X o O dependiendo de el jugador
const Item = ({cuadrado}) => {
    return (
        <div className="item">
            <div className="data">{cuadrado}</div>
        </div>
    );
}

export default Item;