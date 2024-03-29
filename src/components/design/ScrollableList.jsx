import { useEffect, useRef } from "react";

const ScrollableList = ({ children }) => {
  const containerRef = useRef(null);
  let isDragging = false;
  let startX, scrollLeft;

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (event) => {
      event.preventDefault(); // Empêche la sélection de texte lors du maintien du clic
      isDragging = true;
      startX = event.pageX || event.touches[0].pageX;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const x = event.pageX || event.touches[0].pageX;
      const deltaX = x - startX;
      container.scrollLeft = scrollLeft - deltaX;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchstart", handleMouseDown);
    container.addEventListener("touchend", handleMouseUp);
    container.addEventListener("touchmove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchstart", handleMouseDown);
      container.removeEventListener("touchend", handleMouseUp);
      container.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full border-b-[0.1px] border-white/10 pb-4"
      onMouseMove={(event) => {
        if (isDragging) {
          event.preventDefault(); // Empêche la propagation de l'événement lorsque le clic est maintenu
        }
      }}
      onTouchMove={(event) => {
        if (isDragging) {
          event.preventDefault(); // Empêche la propagation de l'événement lorsque le toucher est maintenu
        }
      }}
    >
      {children}
    </div>
  );
};

export default ScrollableList;
