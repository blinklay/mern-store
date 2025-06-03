import { useEffect } from "react";

export default function useHelmet(title) {
  useEffect(() => {
    document.title = title + " | Guitar Store"
  }, [])
}