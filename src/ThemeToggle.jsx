import { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import './styles/ThemeToggle.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <div className="toggle-container">
      <input id="switch" type="checkbox" onClick={toggleTheme} />
      <label htmlFor="switch" className="theme-toggle">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
