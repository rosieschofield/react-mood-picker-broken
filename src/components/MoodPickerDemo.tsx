function MoodPickerDemo(): JSX.Element {
  let mood = "confused";

  const handleMoodChangeToHappy = () => {
    mood = "happy";
    console.log("😀 the value of mood is now", mood);
  };

  const handleMoodChangeToConfused = () => {
    mood = "confused";
    console.log("🤔 the value of mood is now", mood);
  };

  const handleMoodChangeToSad = () => {
    mood = "sad";
    console.log("😢 the value of mood is now", mood);
  };

  console.log("Component is rendering with a mood value of", mood);

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {mood}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
    </>
  );
}

export default MoodPickerDemo;
