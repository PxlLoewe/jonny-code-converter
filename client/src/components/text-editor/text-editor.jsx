import React, { useState } from 'react';
import "./text-editor.css"

export default function TextEditor(props) {
    const [fileName, setFileName] = useState("")
    const [plainText, setPlainText] = useState("")

    const onClick = () => {
        props.generateCode(plainText, fileName)
    }

    return (
        <div className="form-wrapper">
            <h3 className="element">paste text here to convert</h3>
            <input onChange={e => { setFileName(e.target.value) }} placeholder="file name" type="text" name="file-name" />
            <textarea onChange={e => { setPlainText(e.target.value) }} placeholder="text to convert to Jonny-code" cols="30" rows="10"></textarea>
            <input onClick={onClick} type="submit" value="convert!" />
            <div className="info">
                <h3>Use an Syntax like this:</h3>
                <p />000: INC 010
                <p />001: INC 010
                <p />002: INC 010
                <p />003: INC 010
                <p />004: DEC 010
            </div>
        </div>
    )
}
