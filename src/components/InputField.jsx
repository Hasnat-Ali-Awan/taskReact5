function InputField({ text, setText }) {
    return (
        <input
            type="text"
            placeholder="Enter your name..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
}

export default InputField;