const branch = 'refs/heads/COR-1830/Nombre-de-la-branch';
const corStr = branch.split('COR-');
const separado = corStr[1].split('/');
console.log(separado[0]);
