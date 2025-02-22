const fs = require('fs');
const path = require('path');

const version = process.argv[2];
console.log('\x1B[32m当前发布版本为：\x1B[0m', version);

if (!version) {
  console.log('\x1B[31m请指定版本号\x1B[0m');
  return;
}

const packageJsonPath = path.resolve(__dirname, '../package.json');

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const json = JSON.parse(data);
  json.version = version;

  // 防止stringify序列化打乱字段顺序，手动调整属性顺序
  const orderedJson = {
    ...json,
    version: json.version,
  };

  // 覆盖 package.json
  fs.writeFile(
    packageJsonPath,
    JSON.stringify(orderedJson, null, 2),
    'utf8',
    (err) => {
      if (err) {
        console.error(err);
      }
    },
  );
});
