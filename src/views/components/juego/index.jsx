import Item from "./../item";
import "./index.scss";

//El juego controlará las reglas del juego
const Juego = ({ cuadrados, setCuadrados }) => {
    return (
        <div id="juego" className="juego">
            <div className="container">
                <div className="row">
                    <Item cuadrado={cuadrados[0]} />
                    <Item cuadrado={cuadrados[1]} />
                    <Item cuadrado={cuadrados[2]} />
                </div>
                <div className="row">
                    <Item cuadrado={cuadrados[3]} />
                    <Item cuadrado={cuadrados[4]} />
                    <Item cuadrado={cuadrados[5]} />
                </div>
                <div className="row">
                    <Item cuadrado={cuadrados[6]} />
                    <Item cuadrado={cuadrados[7]} />
                    <Item cuadrado={cuadrados[8]} />
                </div>
            </div>
        </div>
    );
}

export default Juego;