import { useState, useEffect } from 'react';

const useExampleHook = () => {
  const [state, setState] = useState<string>('Hello World');

  useEffect(() => {
    console.log(state);
  }, [state]);

  return { state, setState };
};

export default useExampleHook;
