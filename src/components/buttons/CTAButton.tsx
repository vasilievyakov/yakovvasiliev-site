
import React from 'react';
import './CTAButton.css';

type CTAButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  href,
}) => {
  if (href) {
    return (
      <a href={href} className="cta-button-root" onClick={onClick}>
        <span className="cta-button-label">{children}</span>
      </a>
    );
  }
  return (
    <button className="cta-button-root" onClick={onClick} type="button">
      <span className="cta-button-label">{children}</span>
    </button>
  );
};
