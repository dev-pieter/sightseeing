"use client";
import React, { useEffect } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useTextToSpeech from "./hooks";

const Dictaphone = () => {
  const { playText } = useTextToSpeech();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({
    commands: [
      {
        command: "directions",
        callback: () => {
          playText("Take a left turn.");
          resetTranscript();
        },
      },
    ],
  });

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true });
    }
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
