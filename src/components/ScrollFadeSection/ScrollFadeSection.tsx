
import React from 'react';
import './ScrollFadeSection.css';
import { useScrollFade } from '../ScrollFadeProvider/useScrollFade';

type ScrollFadeSectionProps = {
  id?: string;
  children: React.ReactNode;
  variant?: 'default' | 'soft' | 'outlined';
};

export const ScrollFadeSection: React.FC<ScrollFadeSectionProps> = ({
  id,
  children,
  variant = 'default',
}) => {
  const { ref, visibleClass } = useScrollFade();

  return (
    <section
      id={id}
      ref={ref}
      className={`scrollfade-section scrollfade-${variant} ${visibleClass}`}
    >
      {children}
    </section>
  );
};
