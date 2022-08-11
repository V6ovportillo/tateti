import Title from "./pages/tittle";
import Game from "./pages/game";
import Menu from "./components/menu";
import './index.scss';


const App = () => {
    return (
        <div id="app" className="app">
            <Title />
            <Game/>
            <Menu />
        </div>
    );
}

export default App;