import React from 'react';
import styles from '../assets/styles/main.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Alexr Network React</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
