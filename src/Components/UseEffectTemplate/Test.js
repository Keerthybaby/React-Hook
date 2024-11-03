import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log("Test Running");

    // clean up function
    return () => {
      console.log("Unmount");
    };
  }, []);

  return <h1>Test Component</h1>;
};

export default Test;