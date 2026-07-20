function InputField({ text, setText }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default InputField;