import { useRef } from "react";

function useDebounceHook(cb, delay = 1000) {
  const timerRef = useRef(null);

  return (...args) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  }; 
}

export default useDebounceHook;
