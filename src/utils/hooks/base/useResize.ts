import {
  useEffect,
  useState,
  useDeferredValue,
  useCallback,
  useRef,
} from 'react';

type TargetType = HTMLElement | Element | Window | Document;

export const useResize = () => {
  const domRef = useRef<any>(null);
  const targetRef = useCallback((node: TargetType) => {
    if (node) {
      domRef.current = node;
    }
  }, []);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const delayWidth = useDeferredValue(width);
  const delayHeight = useDeferredValue(height);

  useEffect(() => {
    if (!domRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { clientWidth, clientHeight } = entry.target;
        setWidth(clientWidth);
        setHeight(clientHeight);
      });
    });

    resizeObserver?.observe(domRef.current);
  }, [domRef]);

  return { width: delayWidth, height: delayHeight, targetRef };
};
