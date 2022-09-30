const fs = require('fs');
const path = require('path');

const rootLib = path.resolve('../packages/native');
const root = process.cwd();

console.log({root, rootLib});

function copyFiles() {
  fs.copyFile(`${rootLib}/package.json`, `${root}/temp/_package.json`, (err) => {
    if (err) {
      console.log("Oops! An Error Occured:", err);
    } else {
      console.log('--- Finish ---')
    }
  })

  fs.copyFile(`${rootLib}/src/Context/theme/defaultValues.ts`, `${root}/temp/defaultValues.ts`, (err) => {
    if (err) {
      console.log("Oops! An Error Occured:", err);
    } else {
      console.log('--- Finish ---')
    }
  })
}

copyFiles()
