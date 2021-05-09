import React, { createContext, useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

export const SwitchContext = createContext();

const SwitchProvider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedTab, setSelectedTab] = useState({
    selected: "Popular",
    id: null,
  });
  const { value, toggle } = useDarkMode(false, {
    storageKey: "apiCall",
    onChange: null,
  });
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hooks = {
    checked,
    setChecked,
    value,
    toggle,
    selectedTab,
    setSelectedTab,
  };

  return (
    <SwitchContext.Provider value={hooks}>
      {isMounted && children}
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
