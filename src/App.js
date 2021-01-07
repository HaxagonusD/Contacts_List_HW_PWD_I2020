import "./App.css";
import { results } from "./data/contacts.json";
import Contact from "./components/Contact";
function App() {
  console.log(results);
  return (
    <div className="App">
      {results.map((contactInfo) => {
        return <Contact {...contactInfo} />;
      })}
    </div>
  );
}

export default App;
