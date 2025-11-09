
import React from 'react';
import './Formats.css';
import { ScrollFadeSection } from '../../components/ScrollFadeSection/ScrollFadeSection';

const formats = [
  {
    id: 1,
    title: 'AI-интенсивы для команд',
    what: 'Три сессии по 2,5 часа. Работаем на ваших задачах. Разбираем процессы, создаём шаблоны и инструменты.',
    result:
      'Команда начинает использовать AI системно и осознанно, с ростом скорости и качества.',
    price: 'от € 3500 / команда до 10 чел.',
  },
  {
    id: 2,
    title: 'Стратегическая платформа (без исследования)',
    what: 'Определяем позиционирование, структуру бренда, tone of voice и коммуникационную рамку.',
    result:
      'Чёткий смысл, понятная логика и визуально-вербальная целостность бренда.',
    price: 'от € 3000',
  },
  {
    id: 3,
    title: 'AI-системы под задачу',
    what: 'Проектирование и внедрение решений (боты, RAG-системы, генераторы, дашборды).',
    result:
      'Рабочие инструменты, которые действительно экономят время и снижают рутину.',
    price: 'от € 4000',
  },
  {
    id: 4,
    title: 'Индивидуальные консультации',
    what: 'Персональные стратегические сессии онлайн или офлайн. Минимум 2 часа, рекомендовано 5+.',
    result:
      'Структурируем задачу, находим противоречия, выстраиваем направление.',
    price: '€ 250 / час',
  },
  {
    id: 5,
    title: 'Программа консультаций и внедрения',
    what: 'Два месяца плотной совместной работы. Еженедельные встречи, пошаговое внедрение инструментов.',
    result:
      'Рабочая AI-система под ваш контекст и обученная команда.',
    price: '€ 12 000 / 2 мес.',
  },
  {
    id: 6,
    title: 'Совместное осмысление бизнеса для C-level',
    what: 'Серия воркшопов через феноменологию, диалектику и герменевтику управленческих решений.',
    result:
      'Руководители переосмысливают бизнес как живую систему, находят язык для разговоров о сути и будущем.',
    price: '€ 6000 / модуль',
  },
];

export const Formats: React.FC = () => {
  return (
    <ScrollFadeSection id="formats" variant="outlined">
      <div className="formats-root">
        <div className="formats-head">
          <div>
            <div className="formats-label">Форматы</div>
            <h2 className="formats-title">
              Никаких «универсальных» решений. Только формы, в которых работает
              мысль.
            </h2>
          </div>
          <p className="formats-subtitle">
            Каждый формат — это инструмент для конкретной задачи: обучить
            команду, собрать платформу бренда, выстроить AI-систему или создать
            пространство для управленческих решений.
          </p>
        </div>
        <div className="formats-list">
          {formats.map((f) => (
            <div key={f.id} className="format-card">
              <div className="format-meta">
                <h3 className="format-title">{f.title}</h3>
              </div>
              <div className="format-columns">
                <div className="format-col">
                  <div className="format-label">Что происходит</div>
                  <p className="format-text">{f.what}</p>
                </div>
                <div className="format-col">
                  <div className="format-label">Что вы получаете</div>
                  <p className="format-text">{f.result}</p>
                </div>
                <div className="format-col format-col-price">
                  <div className="format-label">Стоимость</div>
                  <div className="format-price">{f.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollFadeSection>
  );
};
