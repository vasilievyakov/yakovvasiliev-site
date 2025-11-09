
import React, { createContext, useEffect, useRef } from 'react';
import './ScrollFadeProvider.css';

type ScrollFadeContextValue = {
  createRef: () => React.RefObject<HTMLElement>;
};

export const ScrollFadeContext =
  createContext<ScrollFadeContextValue | null>(null);

type ScrollFadeProviderProps = {
  children: React.ReactNode;
};

export const ScrollFadeProvider: React.FC<ScrollFadeProviderProps> = ({
  children,
}) => {
  const refs = useRef<React.RefObject<HTMLElement>[]>([]);

  const createRef = () => {
    const r = React.createRef<HTMLElement>();
    refs.current.push(r);
    return r;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('scrollfade-visible');
            observer.unobserve(el);
          }
        });
      },
      {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.12,
      }
    );

    refs.current.forEach((r) => {
      if (r.current) observer.observe(r.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.add('ready');
    return () => document.body.classList.remove('ready');
  }, []);

  return (
    <ScrollFadeContext.Provider
      value={{
        createRef,
      }}
    >
      {children}
    </ScrollFadeContext.Provider>
  );
};
