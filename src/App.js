import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World Jasper is Here
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// {
//   "name":"Task Tracker",
//   "dockerFile":"Dockerfile",
//   "appPort": "[3000]",
//   "runArgs": ["-u", "node"],
//   "settings": {
//       "workbench.colorTheme":"Andromeda Italic",
//       /*"terminal.integrated.profiles.linux": {
//           "zsh (login)": {
//               "path": "zsh",
//               "args": ["-l"]
//           }
//       }*/
//   },
//   "postCreateCommand": "npm install",
//   "extensions": [
//   "eliverlara.andromeda",
//   "ms-azuretools.vscode-docker",
//   "dsznajder.es7-react-js-snippets",
//   "oderwat.indent-rainbow",
//   "esbenp.prettier-vscode"
// ]

// }