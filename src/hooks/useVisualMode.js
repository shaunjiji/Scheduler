
import React, { useState } from "react";

export default function useVisualMode(initial) {

  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace) {
    if (!replace) {
      setHistory((prev) => [...prev, mode]);
    }
    else {
     
      setHistory((prev) => [...prev.splice(0, prev.length-1), mode]);
      
    }
  }
  function back() {
    if (history.length > 1){
      const historyUpdate = [...history];
      historyUpdate.pop();
      setHistory(historyUpdate);
    }
    

  }


  return { mode: history[history.length-1], transition, back };
}

