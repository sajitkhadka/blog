import { useState } from "react";

const useConstructor = (
  callBack = (): any => {
    return undefined;
  }
): void => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};

export default useConstructor;
