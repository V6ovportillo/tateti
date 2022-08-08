import Titulo from "./components/titulo";
import Juego from "./components/juego";
import Menu from "./components/menu";
import Ranking from "./components/ranking";
import './index.scss';

const App = () => {
    
    return (
        <div id="app" className="app">
            <Titulo/>
            <Juego/>
            <Menu/>
            <Ranking/>
        </div>
    );
}

export default App;