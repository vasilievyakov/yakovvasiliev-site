
import React from 'react';
import './Hero.css';
import { CTAButton } from '../../components/buttons/CTAButton';

export const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absoluteY = window.scrollY + rect.top - 40;
    window.scrollTo({ top: absoluteY, behavior: 'smooth' });
  };

  return (
    <section className="hero-root">
      <div className="hero-layout">
        <div className="hero-label">
          2025 · Стратегия, AI и мышление без шума
        </div>
        <h1 className="hero-title">
          Мир ускоряется быстрее, чем мы успеваем понимать.
          <span className="hero-title-accent">
            Я помогаю не догонять, а осмыслять.
          </span>
        </h1>
        <p className="hero-subtitle">
          Работаю с руководителями и командами, чтобы технология, стратегия и
          мышление говорили на одном языке. Без хайпа. Без «модных практик».
          С уважением к сложности вашего бизнеса.
        </p>
        <div className="hero-actions">
          <CTAButton onClick={handleScrollToContact}>
            Обсудить задачу
          </CTAButton>
          <div className="hero-note">
            Короткий созвон на 20–30 минут, чтобы понять задачу и решить, есть
            ли смысл продолжать.
          </div>
        </div>
      </div>
      <div className="hero-side">
        <div className="hero-card">
          <div className="hero-card-tag">Отбор для тех, кто думает</div>
          <div className="hero-card-line">
            <span>15+ лет</span>
            <span>стратегия, бренды, технологии</span>
          </div>
          <div className="hero-card-line">
            <span>AI-системы</span>
            <span>под реальные процессы, не под презентации</span>
          </div>
          <div className="hero-card-line">
            <span>C-level</span>
            <span>пространство для решений, а не для моды</span>
          </div>
          <p className="hero-card-foot">
            Не курс, не агентство и не «гуру по трендам», а ваш партнёр в
            осмыслении, архитектуре и внедрении.
          </p>
        </div>
      </div>
    </section>
  );
};
