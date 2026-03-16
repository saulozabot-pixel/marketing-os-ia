const fs = require('fs');
const path = require('path');

/**
 * Esse script corrige um erro comum do Vercel AI SDK vs Zod
 * onde o pacote zod-to-json-schema tenta importar 'zod/v3'
 * mas o mapa de exports do Zod está incompleto ou mal resolvido.
 */

function patchPackage(dir) {
  const pkgPath = path.join(dir, 'package.json');
  if (!fs.existsSync(pkgPath)) return;

  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    
    if (pkg.name === 'zod') {
      console.log(`Checking zod package at ${dir}...`);
      if (!pkg.exports) pkg.exports = {};
      
      // Garante que o export ./v3 existe
      if (!pkg.exports['./v3']) {
        console.log('Patching missing ./v3 export in zod...');
        pkg.exports['./v3'] = {
          "types": "./index.d.ts",
          "import": "./index.js",
          "require": "./index.cjs"
        };
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
        console.log('Zod patched successfully!');
      }
    }
  } catch (e) {
    console.error(`Failed to patch ${dir}:`, e);
  }

  // Recursão para achar instâncias aninhadas (nested node_modules)
  const nodeModules = path.join(dir, 'node_modules');
  if (fs.existsSync(nodeModules)) {
    const subDirs = fs.readdirSync(nodeModules);
    subDirs.forEach(sub => {
      const fullPath = path.join(nodeModules, sub);
      if (fs.statSync(fullPath).isDirectory()) {
        patchPackage(fullPath);
      }
    });
  }
}

// Inicia a busca a partir do node_modules principal
const rootNodeModules = path.resolve(process.cwd(), 'node_modules');
if (fs.existsSync(rootNodeModules)) {
  const subDirs = fs.readdirSync(rootNodeModules);
  subDirs.forEach(sub => {
    const fullPath = path.join(rootNodeModules, sub);
    if (fs.statSync(fullPath).isDirectory()) {
      patchPackage(fullPath);
    }
  });
} else {
  console.log('No node_modules found to patch.');
}
