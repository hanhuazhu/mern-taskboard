import { useEffect, useRef, useState } from "react";

const useVisibility = (initialState) => {
  const [isVisibile, setIsVisible] = useState(initialState);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, []);

  return { ref, isVisibile, setIsVisible }
}

export default useVisibility;