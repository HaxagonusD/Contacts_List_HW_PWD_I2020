import "./components/Contact.css";
import { results } from "./data/contacts.json";
import Contact from "./components/Contact";
function App() {
  console.log(results);
  return (
    <div className="App">
      <div className="container">
        {results.map((contactInfo) => {
          return <Contact {...contactInfo} />;
        })}
      </div>
    </div>
  );
}

export default App;
