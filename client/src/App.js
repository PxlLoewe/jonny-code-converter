import TextEditor from "./components/text-editor/text-editor";
import Output from "./components/output-field/output";
import "./app.css";

function App() {
  return (
    <div className="app-wrapper">
      <h1>Convert plain text to Johnny Code</h1>
      <div className="box">
        <TextEditor />
        <Output />
      </div>
    </div>
  );
}

export default App;
