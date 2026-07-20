function BackgroundButtons({ setBgColor }) {
    return (
        <div>
            <h3 style={{ color: "black" }}>Choose Background</h3>

            <button onClick={() => setBgColor("#ffffff")}>
                White
            </button>

            <button onClick={() => setBgColor("#dbeafe")}>
                Blue
            </button>

            <button onClick={() => setBgColor("#dcfce7")}>
                Green
            </button>

            <button onClick={() => setBgColor("#fce7f3")}>
                Pink
            </button>
        </div>
    );
}

export default BackgroundButtons;