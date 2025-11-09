
import React from 'react';
import './Approach.css';
import { ScrollFadeSection } from '../../components/ScrollFadeSection/ScrollFadeSection';

export const Approach: React.FC = () => {
  return (
    <ScrollFadeSection variant="soft">
      <div className="approach-root">
        <div className="approach-quote-mark">«</div>
        <div className="approach-content">
          <h2 className="approach-title">Как я работаю</h2>
          <p className="approach-text">
            Стратегия — это не отчёт, а способ видеть взаимосвязи. Я соединяю
            аналитику, культуру и технологии, чтобы из хаоса данных рождался
            смысл. Работаем спокойно, глубоко и без суеты: сначала видим — потом
            делаем.
          </p>
        </div>
      </div>
    </ScrollFadeSection>
  );
};
