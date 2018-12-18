// create package.json and README for packages that don't have one yet

const fs = require('fs')
const path = require('path')
const baseVersion = require('../packages/@jskit/shared/package.json').version

const packagesDir = path.resolve(__dirname, '../packages/@jskit')
const files = fs.readdirSync(packagesDir)

files.forEach(pkg => {
  if (pkg.charAt(0) === '.') return

  const isPlugin = /^jskit-plugin-/.test(pkg)
  const desc = isPlugin
    ? `${pkg.replace('jskit-plugin-', '')} plugin for js-cli`
    : `${pkg.replace('jskit-', '')} for js-cli`

  const pkgPath = path.join(packagesDir, pkg, `package.json`)
  if (!fs.existsSync(pkgPath)) {
    const json = {
      'name': `@jskit/${pkg}`,
      'version': baseVersion,
      'description': desc,
      'main': 'index.js',
      'publishConfig': {
        'access': 'public'
      },
      'repository': {
        'type': 'git',
        'url': 'git+https://github.com/jskit/js-cli.git'
      },
      'keywords': [
        'jscli',
        'cli'
      ],
      'author': 'Evan You',
      'license': 'MIT',
      'bugs': {
        'url': 'https://github.com/jskit/js-cli/issues'
      },
      'homepage': `https://github.com/jskit/js-cli/tree/dev/packages/@jskit/${pkg}#readme`
    }
    fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2))
  }

  const readmePath = path.join(packagesDir, pkg, `README.md`)
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, `# @jskit/${pkg}\n\n> ${desc}`)
  }

  const npmIgnorePath = path.join(packagesDir, pkg, `.npmignore`)
  if (!fs.existsSync(npmIgnorePath)) {
    fs.writeFileSync(npmIgnorePath, `__tests__\n__mocks__`)
  }
})
