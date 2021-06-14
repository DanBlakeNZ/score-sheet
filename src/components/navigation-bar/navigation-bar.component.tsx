import React from 'react';
import navigationItems from '../../data/navigation-items';
import PlayHQLogo from '../play-hq-logo/play-hq-logo.component';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar__section">
        <PlayHQLogo />
      </div>

      <div className="navigation-bar__section">
        <select id="navigation-bar-options" name="sports">
          <option value="sport-1">Sport 1</option>
          <option value="sport-2">Sport 2</option>
          <option value="sport-3">Sport 3</option>
        </select>
      </div>

      <div className="navigation-bar__section">
        <ul>
          {navigationItems.map(({ name, link, iconUrl }, index) => (
            <li key={index} className="navigation-bar__item">
              <a href={link}>
                <img src={iconUrl} alt="" />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
