import React from 'react';
import "./text-editor.css"

export default function TextEditor() {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmit}>
                <h3 className="element">paste text here to convert</h3>
                <input placeholder="file name" type="text" name="file-name" />
                <textarea placeholder="text to convert to Jonny-code" cols="30" rows="10"></textarea>
                <input type="submit" value="convert!" />
            </form>
        </div>
    )
}
