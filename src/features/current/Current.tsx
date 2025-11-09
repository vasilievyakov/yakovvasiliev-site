
import React from 'react';
import './Current.css';
import { ScrollFadeSection } from '../../components/ScrollFadeSection/ScrollFadeSection';

export const Current: React.FC = () => {
  return (
    <ScrollFadeSection variant="default">
      <div className="current-root">
        <div className="current-label">Сейчас</div>
        <p className="current-text">
          Развиваю проекты и форматы, в которых компании учатся использовать AI
          осознанно, а стратегии перестают быть набором слайдов и становятся
          практикой мышления.
        </p>
        <ul className="current-list">
          <li>
            <strong>AI Moment</strong> — интенсив о новой грамотности в работе с
            нейросетями.
          </li>
          <li>
            Консультации и внедрение AI-инструментов под реальные процессы
            агентств и брендов.
          </li>
          <li>
            Воркшопы для топ-команд: феноменология, диалектика и герменевтика
            управленческих решений.
          </li>
        </ul>
      </div>
    </ScrollFadeSection>
  );
};
