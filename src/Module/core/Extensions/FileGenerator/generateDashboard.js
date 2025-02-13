import { exec } from 'child_process';

const fileName = process.argv[2];
const moduleName = process.argv[3];
const type = process.argv[4] || 'Modal';

if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

if (!moduleName) {
  console.error('Please provide a module name.');
  process.exit(1);
}

 /// main Generator 
const CreateApi = `node  src/Module/core/Extensions/FileGenerator/generateApi.js ${fileName} ${moduleName} `;
const CreateFormUtil = `node src/Module/core/Extensions/FileGenerator/generateFormUtil.js ${fileName} ${moduleName} `;
const CreateForm = `node src/Module/core/Extensions/FileGenerator/generateForm.js ${fileName} ${moduleName} `;
const CreateType = `node src/Module/core/Extensions/FileGenerator/generateType.js ${fileName} ${moduleName} `;
const CreatePermissions = `node src/Module/core/Extensions/FileGenerator/generatePermissions.js ${fileName} ${moduleName} `;
const CreateRoutes = `node src/Module/core/Extensions/FileGenerator/generateRoute.js ${fileName} ${moduleName} `;

/// Page 
const CreatePage = `node src/Module/core/Extensions/FileGeneratorPage/generatePage.js ${fileName} ${moduleName} `;
const CreateColumn = `node src/Module/core/Extensions/FileGeneratorPage/generateColumn.js ${fileName} ${moduleName} `;
const CreateAddPage = `node src/Module/core/Extensions/FileGeneratorPage/generateCreatePage.js ${fileName} ${moduleName} `;
const CreateEditPage = `node src/Module/core/Extensions/FileGeneratorPage/generateUpdatePage.js ${fileName} ${moduleName} `;

//  Modal
const CreateAddModal = `node src/Module/core/Extensions/FileGeneratorModal/generateModalCreate.js ${fileName} ${moduleName}`;
const CreateEditModal = `node src/Module/core/Extensions/FileGeneratorModal/generateModalUpdate.js ${fileName} ${moduleName} `;
const CreateColumnModal = `node src/Module/core/Extensions/FileGeneratorModal/generateColumn.js ${fileName} ${moduleName} `;
const CreatePageModal = `node src/Module/core/Extensions/FileGeneratorModal/generatePage.js ${fileName} ${moduleName} `;


if(type === "Modal"){

  const RunCommand = async () => {
    exec(CreatePageModal);
    exec(CreateType);
    exec(CreateApi);
    exec(CreatePermissions);
    setTimeout(() => {}, 100);
    exec(CreateFormUtil);
    exec(CreateColumnModal);
    exec(CreateForm);
    exec(CreateRoutes);
    exec(CreateAddModal);
    exec(CreateEditModal);
  };
  
  RunCommand();

}else {

  const RunCommand = async () => {
    exec(CreateType);
    exec(CreatePage);
    exec(CreateApi);
    exec(CreatePermissions);
    setTimeout(() => {}, 100);
    exec(CreateColumn);
    exec(CreateFormUtil);
    exec(CreateAddPage);
    exec(CreateEditPage);
    exec(CreateForm);
    exec(CreateRoutes);
  };
  
  RunCommand();

}
