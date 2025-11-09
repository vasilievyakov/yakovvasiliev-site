
import React from 'react';
import './Layout.css';
import { CTAButton } from '../buttons/CTAButton';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absoluteY = window.scrollY + rect.top - 40;
    window.scrollTo({ top: absoluteY, behavior: 'smooth' });
  };

  return (
    <div className="layout-root">
      <header className="layout-header">
        <div className="layout-header-inner">
          <div className="layout-brand">
            <div className="layout-brand-mark" />
            <div className="layout-brand-text">
              <span className="layout-brand-name">Yakov Vasilyev</span>
              <span className="layout-brand-role">
                Strategy, AI systems, sensemaking
              </span>
            </div>
          </div>
          <nav className="layout-nav">
            <a href="#about" className="layout-nav-link">
              Обо мне
            </a>
            <a href="#formats" className="layout-nav-link">
              Форматы
            </a>
            <a href="#clevel" className="layout-nav-link">
              Для C-level
            </a>
            <a href="#process" className="layout-nav-link">
              Как устроено
            </a>
          </nav>
          <div className="layout-cta-wrap">
            <CTAButton onClick={handleScrollToContact}>
              Обсудить задачу
            </CTAButton>
          </div>
        </div>
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <div className="layout-footer-inner">
          <div className="layout-footer-left">
            <span className="layout-footer-label">Осмыслять, а не догонять.</span>
            <span className="layout-footer-note">
              Работаю только с командами, которые готовы думать глубже
              «повестки» и трендов.
            </span>
          </div>
          <div className="layout-footer-right">
            <a href="mailto:hello@yakovvasiliev.com" className="layout-footer-link">
              hello@yakovvasiliev.com
            </a>
            <a
              href="https://t.me/yakovvasiliev"
              target="_blank"
              rel="noreferrer"
              className="layout-footer-link"
            >
              Telegram: @yakovvasiliev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
