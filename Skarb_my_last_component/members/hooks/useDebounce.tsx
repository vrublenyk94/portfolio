import debounce from "lodash/debounce";
import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const debounced = debounce((valueToDebounce: string) => {
      setDebouncedValue(valueToDebounce);
    }, delay);
    debounced(value);
    return () => {
      debounced.cancel();
    };
  }, [value, delay]);
  return debouncedValue;
}
