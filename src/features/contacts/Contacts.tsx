
import React from 'react';
import './Contacts.css';
import { ScrollFadeSection } from '../../components/ScrollFadeSection/ScrollFadeSection';
import { CTAButton } from '../../components/buttons/CTAButton';

export const Contacts: React.FC = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:hello@yakovvasiliev.com';
  };

  return (
    <ScrollFadeSection id="contact" variant="soft">
      <div className="contacts-root">
        <div className="contacts-label">Контакты</div>
        <h2 className="contacts-title">
          Если вам важно не отставать от трендов,
          вы не мой клиент.
          Если важно понять, как всё устроено — поговорим.
        </h2>
        <p className="contacts-text">
          Работаю только с теми, кому действительно интересно думать о смысле,
          структуре и последствиях. Напишите пару строк о контексте — я вернусь
          с предложением формата или честно скажу, если помочь не смогу.
        </p>
        <div className="contacts-grid">
          <div className="contacts-block">
            <div className="contacts-label-small">Почта</div>
            <a
              href="mailto:hello@yakovvasiliev.com"
              className="contacts-link"
            >
              hello@yakovvasiliev.com
            </a>
          </div>
          <div className="contacts-block">
            <div className="contacts-label-small">Telegram</div>
            <a
              href="https://t.me/yakovvasiliev"
              target="_blank"
              rel="noreferrer"
              className="contacts-link"
            >
              @yakovvasiliev
            </a>
          </div>
        </div>
        <div className="contacts-cta-row">
          <CTAButton onClick={handleMailClick}>
            Обсудить задачу
          </CTAButton>
          <div className="contacts-cta-note">
            Удобно, если в первом письме вы кратко опишете бизнес, контекст и
            решение, которое ищете.
          </div>
        </div>
      </div>
    </ScrollFadeSection>
  );
};
