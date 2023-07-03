import { useState } from 'react';

export const useToggle = (initialVal: boolean = false) => {
  const [toggleVal, setToggleVal] = useState(initialVal);

  return {
    toggleVal,
    setToggleVal: (outerData?: boolean) => {
      if (outerData) setToggleVal(outerData);
      setToggleVal((pre) => !pre);
    },
  };
};
