// Browser Debug Script for React App
// Copy and paste this into the browser console when viewing http://localhost:8081/

console.group('React App Debug Info');

// Check for root element
const rootElement = document.getElementById('root');
console.log('1. Root element exists:', !!rootElement);
if (rootElement) {
    console.log('   Root element content:', rootElement.innerHTML || '(empty)');
    console.log('   Root element children:', rootElement.children.length);
}

// Check for React in window
console.log('2. React in window:', typeof window.React !== 'undefined');
console.log('3. ReactDOM in window:', typeof window.ReactDOM !== 'undefined');

// Check for module script
const moduleScript = document.querySelector('script[type="module"]');
console.log('4. Module script found:', !!moduleScript);
if (moduleScript) {
    console.log('   Script src:', moduleScript.src);
}

// Check for Vite client
console.log('5. Vite client connected:', typeof window.__vite_plugin_react_preamble_installed__ !== 'undefined');

// Check network requests
console.log('6. Checking network requests...');
if (window.performance && window.performance.getEntriesByType) {
    const resources = window.performance.getEntriesByType('resource');
    const jsResources = resources.filter(r => r.name.includes('.tsx') || r.name.includes('.ts') || r.name.includes('.js'));
    console.log('   JavaScript resources loaded:', jsResources.length);
    jsResources.forEach(r => {
        console.log(`   - ${r.name.split('/').pop()}: ${r.transferSize > 0 ? 'loaded' : 'failed'}`);
    });
}

// Check for console errors
console.log('7. Check browser console for any red error messages above this debug output');

// Check React DevTools
console.log('8. React DevTools installed:', !!(window.__REACT_DEVTOOLS_GLOBAL_HOOK__));

// Try to get React fiber root
if (rootElement && rootElement._reactRootContainer) {
    console.log('9. React root container found!');
} else {
    console.log('9. No React root container found on root element');
}

console.groupEnd();

// Additional diagnostics
console.log('\n--- Quick Fixes to Try ---');
console.log('1. Open browser DevTools Network tab and refresh - look for failed requests');
console.log('2. Check Console tab for any red errors');
console.log('3. Try opening http://localhost:8081/test.html to see if the test app works');
console.log('4. Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)');
console.log('5. Try a different browser or incognito mode');