import { useRef, useEffect } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // check if entry is visible in viewport
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        } else {
          ref.current.classList.remove("visible");
        }
      },
      {
        threshold: 0.1, // callback triggered when at least 20% is visible
        rootMargin: "0px 0px 0px 0px", // callback triggered when element is within some px from bottom
      },
    );
    // check if DOM element associated with ref is not null - track if not null
    if (ref.current) observer.observe(ref.current); // "defining" ref using `ref.current`

    return () => observer.disconnect();
  });

  return (
    // ref attached to div - ref.current points to div
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
