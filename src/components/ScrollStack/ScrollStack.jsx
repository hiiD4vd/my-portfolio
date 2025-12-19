import { useLayoutEffect, useRef, useCallback, useEffect } from "react";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 600,
  itemScale = 0.05,
  itemStackDistance = 25,
  stackPosition = "10%",
  scaleEndPosition = "5%",
  baseScale = 0.8,
  blurAmount = 2,
}) => {
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    const endElement = document.querySelector(".scroll-stack-end");
    const endElementTop = endElement
      ? endElement.getBoundingClientRect().top + scrollTop
      : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const currentTranslateY =
        lastTransformsRef.current.get(i)?.translateY || 0;
      const cardTop = rect.top + scrollTop - currentTranslateY;

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jRect = cardsRef.current[j].getBoundingClientRect();
          const jTranslate = lastTransformsRef.current.get(j)?.translateY || 0;
          const jTop = jRect.top + scrollTop - jTranslate;
          if (scrollTop >= jTop - stackPositionPx - itemStackDistance * j) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) blur = (topCardIndex - i) * blurAmount;
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      card.style.filter = blur > 0 ? `blur(${blur}px)` : "";
      lastTransformsRef.current.set(i, { translateY });
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    blurAmount,
    calculateProgress,
    parsePercentage,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", updateCardTransforms);
    return () => window.removeEventListener("scroll", updateCardTransforms);
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
    });
    updateCardTransforms();
  }, [itemDistance, updateCardTransforms]);

  return (
    <div className="scroll-stack-scroller">
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
