const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// The UI optional chaining: `UI.btnCreateRoom?.addEventListener`
code = code.replace(/UI\.(\w+)\?\./g, 'if(UI.$1) UI.$1.');

// We can't do `if(UI.btnSend) UI.btnSend.classList.toggle` inside an arrow function without braces if we expect a return value, but addEventListener passes mostly to void.
// Since all elements exist, we can just remove `?.` from `UI.` completely!
code = code.replace(/UI\.(\w+)\?\./g, 'UI.$1.');

// Screens optional chaining (all screens exist)
code = code.replace(/screens\.(\w+)\?\./g, 'screens.$1.');
code = code.replace(/s\?\./g, 's.');

// Optional chaining for objects that might be null: peer and currentConnection
code = code.replace(/peer\?\./g, 'peer && peer.');
code = code.replace(/currentConnection\?\./g, 'currentConnection && currentConnection.');

// Add try-catch around DOMContentLoaded since I reverted to the old app.js version
code = code.replace(
  "document.addEventListener('DOMContentLoaded', () => {\n  setupEventListeners();\n  initSplashScreen();\n  initSecurity();\n});",
  "document.addEventListener('DOMContentLoaded', () => {\n  try {\n    setupEventListeners();\n    initSplashScreen();\n    initSecurity();\n  } catch(e) {\n    alert('CRITICAL INIT ERROR: ' + e.message);\n  }\n});"
);

fs.writeFileSync('app.js', code);
console.log('Done replacement');
