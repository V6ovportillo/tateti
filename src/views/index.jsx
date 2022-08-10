import Titulo from "./components/titulo";
import Juego from "./components/juego";
import Menu from "./components/menu";
import Score from "./components/score";
import { useState } from "react";
import './index.scss';

const App = () => {

    //Iniciar juego
    const [cuadrados, setCuadrados] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
    const [score, setScore] = useState([0, 0]);
    //Jugar (turnos)
    //El juego termina cuando uno de los dos jugadores hace 3 jugadas en linea o todos los casilleros están completos de jugadas
    //Felicitar al ganador
    //Agregar punto al ganador
    //limpiar el tablero para volver a empezar

    //Controles:
    //No se puede cambiar el estado de un lugar luego de haber hecho clic en él.


    return (
        <div id="app" className="app">
            <Titulo />
            <Juego cuadrados={cuadrados} setCuadrados={setCuadrados} />
            <div className="ganador">Ganador: Jugador { } !</div>
            <Score score={score} />
            <Menu />
        </div>
    );
}

export default App;