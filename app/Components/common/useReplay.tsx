import { useEffect } from "react";

export default function useReplay(key: string, handler: () => void) {
  useEffect(() => {
    const onReplay = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce.detail?.title === key) handler();
    };
    window.addEventListener("gsap-demo-replay", onReplay as EventListener);
    return () =>
      window.removeEventListener("gsap-demo-replay", onReplay as EventListener);
  }, [key, handler]);
}
