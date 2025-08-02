import { createRoot } from 'react-dom/client'
// import App from './App.tsx'  // Original version with problematic Industries component
import App from './App-minimal.tsx'  // Working version
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found!');
}
