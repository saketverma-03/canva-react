import { useState } from "react";

function useTheme(themes, defaultheme) {
  const [theme, setTheme] = useState(defaultheme);
  /*  get Theme from Local Storage if not then Default is light */
  /* set theme to state  localState type*/

  return [theme, setTheme];
}

export default useTheme;
