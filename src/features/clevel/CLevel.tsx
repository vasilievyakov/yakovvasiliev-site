
import React from 'react';
import './CLevel.css';
import { ScrollFadeSection } from '../../components/ScrollFadeSection/ScrollFadeSection';

export const CLevel: React.FC = () => {
  return (
    <ScrollFadeSection id="clevel" variant="soft">
      <div className="clevel-root">
        <div className="clevel-header">
          <div className="clevel-label">Для C-level</div>
          <h2 className="clevel-title">
            Совместное осмысление бизнеса как живой системы.
          </h2>
        </div>
        <p className="clevel-text">
          Это не тренинг и не фасилитация. Это пространство для мышления —
          редкое в корпоративной реальности. Мы исследуем, как живёт бизнес, что
          его сдерживает и как заново выстроить понимание между людьми,
          решениями и контекстом.
        </p>
        <div className="clevel-grid">
          <div className="clevel-item">
            <div className="clevel-item-label">Фокус</div>
            <p>
              Вместо модных фреймворков — феноменология, диалектика и
              герменевтика управленческих решений.
            </p>
          </div>
          <div className="clevel-item">
            <div className="clevel-item-label">Формат</div>
            <p>
              Серия модулей с точной подготовкой под ваш контекст. В комнате —
              только те, кто принимает решения.
            </p>
          </div>
          <div className="clevel-item">
            <div className="clevel-item-label">Результат</div>
            <p>
              Язык для разговора о сути и будущем, ясные точки напряжения
              системы и новые управленческие договорённости.
            </p>
          </div>
          <div className="clevel-price">
            € 6000 / модуль
          </div>
        </div>
      </div>
    </ScrollFadeSection>
  );
};
