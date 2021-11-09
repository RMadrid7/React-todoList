import logo from './logo.svg';
import './App.css';
import TicTacToe from './Games/TicTacToe/Game';
function App() {
  return (
    <div className="App">
      <header className ='title'>
        <p>Tic Tac Toe Game</p>
      </header>
      <TicTacToe />
    </div>
  );
}

export default App;
