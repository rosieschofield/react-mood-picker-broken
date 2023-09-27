import React from "react";
import "./MoodPickerDemo.css";

function MoodPickerDemo(): JSX.Element {
  const [mood, setMood] = React.useState("confused");

  const handleMoodChangeToHappy = () => {
    setMood("happy");
    console.log("😀 the value of mood is now", mood);
  };

  const handleMoodChangeToConfused = () => {
    setMood("confused");
    console.log("🤔 the value of mood is now", mood);
  };

  const handleMoodChangeToSad = () => {
    setMood("sad");
    console.log("😢 the value of mood is now", mood);
  };

  console.log("Component is rendering with a mood value of", mood);

  return (
    <div className="body">
      <h1 className="title">Mood Picker Demo</h1>
      <p className="chosen-mood">Chosen mood: {mood.toUpperCase()}</p>
      <button className="btn" onClick={handleMoodChangeToHappy}>
        😀
      </button>
      <button className="btn" onClick={handleMoodChangeToConfused}>
        🤔
      </button>
      <button className="btn" onClick={handleMoodChangeToSad}>
        😢
      </button>
    </div>
  );
}

export default MoodPickerDemo;
