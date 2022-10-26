import { useState } from "react";

// take in an initial mode
// set the mode state with the initial mode provided
// return an object with a mode property
export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  // allows to transition to a new mode
  function transition(mode, replace) {
    if (!replace) {
      setHistory((prev) => [...prev, mode]);
    } else {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), mode]);
    }
  }

  // allows to call back to return to previous mode
  function back() {
    if (history.length <= 1) return;
    setHistory((prev) => [...prev.slice(0, history.length - 1)]);
  }

  return { mode: history[history.length - 1], transition, back };
}
