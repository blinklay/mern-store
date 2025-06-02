import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
  const storageData = localStorage.getItem(key)
  const [state, setState] = useState(storageData ? JSON.parse(storageData) : initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}