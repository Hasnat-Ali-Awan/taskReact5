function CharacterCounter({ text }) {
  return (
    <h3 style={{color:"black"}}>
      Characters: {text.length}
    </h3>
  );
}

export default CharacterCounter;