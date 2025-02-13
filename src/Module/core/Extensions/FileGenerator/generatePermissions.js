import fs from 'fs';
import path from 'path';

const moduleName = process.argv[3];
const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

if (!moduleName) {
  console.error('Please provide a module name.');
  process.exit(1);
}

const folderPath = path.join('src', 'Module', moduleName, 'utils', 'fn');
const filePath = path.join(folderPath, `${capitalizeFirstLetter(fileName)}Permissions.tsx`);

// Ensure the folder structure exists
fs.mkdirSync(folderPath, { recursive: true });

// Check if the file already exists
if (!fs.existsSync(filePath)) {
  let FileContainer = `
import { ABILITIES_ENUM } from '@Module/core/enums/Abilities';
import { generatePermissions } from '@Module/core/utils/fn/generatePermissions';

///// ${fileName}
export const ${capitalizeFirstLetter(fileName)}Permissions = generatePermissions(ABILITIES_ENUM.PASS);

`;

  fs.writeFileSync(filePath, FileContainer);
  console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
} else {
  console.log(`File "${filePath}" already exists. No changes made.`);
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}