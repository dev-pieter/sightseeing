"use client";
import React, { useState, useEffect } from "react";

const useTextToSpeech = () => {
  const playText = (newtext: any) => {
    const u = new SpeechSynthesisUtterance(newtext);
    handlePlay(u);
  };

  const handlePlay = (text: any) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    synth.speak(text);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();
  };

  return {
    playText,
    handleStop,
  };
};

export default useTextToSpeech;
