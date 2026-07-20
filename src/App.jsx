import { useState } from "react";
import "./App.css";

import InputField from "./components/InputField";
import Greeting from "./components/Greeting";
import CharacterCounter from "./components/CharacterCounter";
import UppercasePreview from "./components/UppercasePreview";
import ControlButtons from "./components/ControlButtons";
import BackgroundButtons from "./components/BackgroundButtons";

function App() {
    const [text, setText] = useState("");
    const [bgColor, setBgColor] = useState("#d2c8c8");

    function clearText() {
        setText("");
    }

    return (
        <div
            className="app"
            style={{ backgroundColor: bgColor }}
        >
            <h1 style={{ color: "black" }}>React Practice App</h1>

            <InputField
                text={text}
                setText={setText}
            />

            <Greeting text={text} />

            <CharacterCounter text={text} />

            <UppercasePreview text={text} />

            <ControlButtons clearText={clearText} />

            <BackgroundButtons
                setBgColor={setBgColor}
            />
        </div>
    );
}

export default App;