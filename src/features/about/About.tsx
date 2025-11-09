
import React from 'react';
import './About.css';
import { ScrollFadeSection } from '../../components/ScrollFadeSection/ScrollFadeSection';

export const About: React.FC = () => {
  return (
    <ScrollFadeSection id="about" variant="outlined">
      <div className="about-root">
        <div className="about-label">Обо мне</div>
        <h2 className="about-title">
          Яков Васильев — стратег, исследователь и консультант по AI.
        </h2>
        <div className="about-grid">
          <p className="about-text">
            Более пятнадцати лет я работаю на стыке стратегии, культуры и
            технологий. Помогаю брендам и командам выстраивать смысловую
            структуру бизнеса, где решения рождаются из понимания, а не из шума.
          </p>
          <p className="about-text">
            Работал в агентствах Havas, Louder, Intterra, Leo Burnett; с
            брендами Porsche, adidas, Heineken, Bacardi, Diageo, Audi,
            Coca-Cola, Mars, McDonald’s, Philips, BASF, Beeline, Sber, TEVA,
            Novartis, Ferrero, Invitro и другими.
            <br />
            <br />
            Мой интерес — как мышление превращается в систему действий
            и как эта система становится устойчивой частью бизнеса.
          </p>
        </div>
      </div>
    </ScrollFadeSection>
  );
};
