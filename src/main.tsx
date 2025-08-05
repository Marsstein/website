import { createRoot } from 'react-dom/client'
import App from './App.tsx'  // Fixed: using the main App component with test routes
// import App from './App-minimal.tsx'  // Minimal version
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found!');
}
