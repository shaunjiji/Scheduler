
import React, { useState } from "react";

export default function useVisualMode(initial) {

  const [history, setHistory] = useState([initial]);

  function transition(mode, replace) {
    if (!replace) {
      setHistory((prev) => [...prev, mode]);
    }
    else {
     
      setHistory((prev) => [...prev.slice(0, prev.length-1), mode]);
      
    }
  }
  // function back() {
  //   if (history.length > 1){
  //     const historyUpdate = [...history];
  //     historyUpdate.pop();
  //     setHistory(historyUpdate);
  //   }
  // }

  function back() {     if (history.length <=1) return;     setHistory(prev => [...prev.slice(0, history.length - 1)]);   }
  
  return { mode: history[history.length-1], transition, back };
}

