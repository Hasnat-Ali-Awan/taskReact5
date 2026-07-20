function Greeting({ text }) {
    return (
        <h2 style={{ color: "black" }}>
            Hello, {text || "Guest"} 👋
        </h2>
    );
}

export default Greeting;