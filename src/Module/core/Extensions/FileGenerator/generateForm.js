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

let FileContainer = `
import ValidationField from '@Module/core/components/ValidationField/ValidationField';
import ValidationFieldRow from '@Module/core/components/ValidationField/components/ValidationFieldRow';

const Form = () => {
  return (
    <ValidationFieldRow>
      <div>
        <ValidationField name="name" type="text" />
      </div>

      <div>
      </div>
    </ValidationFieldRow>
  );
}

export default Form
`;

const filePath = `src/Module/${moduleName}/components/${fileName}/Form.tsx`;

// Create the directories if they don't exist
const dirPath = path.dirname(filePath);
fs.mkdirSync(dirPath, { recursive: true });

fs.writeFileSync(filePath, FileContainer);

console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
