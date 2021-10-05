import { useState } from "react";
import generateJhonnyCode from "./functions/generateJohnnyCode";
import TextEditor from "./components/text-editor/text-editor";
import Output from "./components/output-field/output";
import "./app.css";

/* 000: INC 010
001: INC 010
002: INC 011
003: DEC 010
004: INC 010
005: INC 010
006: NULL 010
007: NULL 011
008: HLT 000 */

function App() {
  const [fileName, setFileName] = useState(null)
  const [convertedText, setConvertedText] = useState(null)

  const generateJohnnyText = async (plainText, fileName) => {
    try {
      const result = await generateJhonnyCode(plainText)
      setFileName(fileName)
      setConvertedText(result)
    } catch (error) {
      setConvertedText(error)
    }
  }

  return (

    <div className="app-wrapper">
      <h1>Johnny code generator</h1>
      <div className="box">
        <TextEditor generateCode={generateJohnnyText} />
        <Output fileName={fileName} convertedText={convertedText} />
      </div>
      <div className="authors">
        created by Johannes Ambré & Tim Schäfer
      </div>
    </div>
  );
}

export default App;
