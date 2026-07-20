function UppercasePreview({ text }) {
    return (
        <h3 style={{color:"black"}}>
            Uppercase: {text.toUpperCase()}
        </h3>
    );
}

export default UppercasePreview;