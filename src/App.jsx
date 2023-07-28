/* eslint-disable react/jsx-key */
import "./App.scss";
import Numbers from "./components/Numbers";
function App() {
  return (
    <div className="App">
      <h2 className="disclaimer">Refresh to get new pairs</h2>
      <Numbers />
    </div>
  );
}

export default App;
