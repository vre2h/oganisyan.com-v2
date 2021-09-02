import { useEffect, useState } from "react";

const isServer = typeof window === "undefined";

function useWindowSize() {
  const [size, setSize] = useState({
    width: !isServer ? window.innerWidth : 0,
    height: !isServer ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("resize", () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    }
  }, []);

  return size;
}

export default useWindowSize;
