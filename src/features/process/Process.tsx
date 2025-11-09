
import React from 'react';
import './Process.css';
import { ScrollFadeSection } from '../../components/ScrollFadeSection/ScrollFadeSection';

export const Process: React.FC = () => {
  return (
    <ScrollFadeSection id="process" variant="outlined">
      <div className="process-root">
        <div className="process-label">Как всё устроено</div>
        <h2 className="process-title">
          Простая структура работы для сложных задач.
        </h2>
        <ol className="process-steps">
          <li>
            <strong>Знакомство.</strong> Короткий созвон, чтобы понять задачу и
            контекст.
          </li>
          <li>
            <strong>Формат.</strong> Предлагаю вариант работы и границы проекта.
          </li>
          <li>
            <strong>Согласование.</strong> Уточняем глубину, состав участников,
            сроки.
          </li>
          <li>
            <strong>Предоплата 50 %.</strong> После подтверждения стартуем
            работу.
          </li>
          <li>
            <strong>Финал.</strong> Оплата второй части и передача всех
            материалов.
          </li>
        </ol>
        <div className="process-payment">
          <div className="process-payment-label">Оплата</div>
          <div className="process-payment-options">
            Криптовалюта, рубли (ИП РФ) или сербский бизнес-счёт.
          </div>
        </div>
      </div>
    </ScrollFadeSection>
  );
};
