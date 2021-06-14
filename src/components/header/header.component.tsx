import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <h1>Scoresheet</h1>
      <ul className="header__breadcrumbs">
        <li className="header__breadcrumb">
          <a href="./#">Home</a>
        </li>
        <li className="header__breadcrumb">
          <a href="./#">My Sports</a>
        </li>
        <li className="header__breadcrumb">
          <a href="./#">Basketball</a>
        </li>
        <li className="header__breadcrumb">
          <a href="./#">Games</a>
        </li>
        <li className="header__breadcrumb">Scoresheet</li>
      </ul>
    </header>
  );
};

export default Header;
