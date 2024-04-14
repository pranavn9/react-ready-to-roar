import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import DemoComponent from './components/DemoComponent';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <div>
        <DemoComponent></DemoComponent>
      </div>
      <h1 className="card">3R: React Ready to Roar!</h1>
      <p>
        Your <strong>React</strong> starter pack, pre-loaded with <strong>Vite</strong>, <strong>ESLint</strong>,
        <strong> Prettier</strong> & <strong>SASS!</strong>
      </p>
    </ThemeProvider>
  );
}

export default App;
