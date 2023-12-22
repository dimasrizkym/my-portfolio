import { useState } from "react";

const useExpanded = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return [expanded, toggleExpanded]
}

export default useExpanded