import { useEffect, useRef, useCallback } from 'react';

type TargetType = HTMLElement | Element | Window | Document;

export const useObserver = (opFunc?: any) => {
  const domRef = useRef<any>(null);
  const targetRef = useCallback((node: TargetType) => {
    if (node) {
      domRef.current = node;
    }
  }, []);

  useEffect(() => {
    const domELE = domRef.current!;
    if (!domELE) return;

    // 判断是否在可视区
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 在可视区
      if (isIntersecting) {
        opFunc();
        // 取消监听;
        observer.unobserve(domELE);
      }
    });
    // 监听
    observer.observe(domELE);
  }, [domRef, opFunc]);

  return { targetRef };
};
