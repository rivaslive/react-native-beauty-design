const fs = require('fs');
const path = require('path');

const rootLib = path.resolve('../packages/native');
const root = process.cwd();

function copyFiles() {
  const pkgDir = `${rootLib}/package.json`;
  const defaultValuesDir = `${rootLib}/src/Context/theme/defaultValues.ts`;

  console.log(`Copying the package.json file from ${pkgDir}`);
  fs.copyFile(pkgDir, `${root}/temp/_package.json`, (err) => {
    if (err) {
      console.log("Oops! An Error Occured:", err);
    } else {
      console.log('File copied')
    }
  })

  console.log(`Copying the variants file from ${defaultValuesDir}`);
  fs.copyFile(defaultValuesDir, `${root}/temp/defaultValues.ts`, (err) => {
    if (err) {
      console.log("Oops! An Error Occured:", err);
    } else {
      console.log('File copied')
    }
  })
}

copyFiles()
