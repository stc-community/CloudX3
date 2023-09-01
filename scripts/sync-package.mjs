import "zx/globals";
import fs from "node:fs";

console.log("Remove stc-community-iot-depin-protocol-client-ts");
await $`pnpm remove stc-community-iot-depin-protocol-client-ts`;

console.log("Add stc-community-iot-depin-protocol-client-ts");
await addDependencies(
  "stc-community-iot-depin-protocol-client-ts",
  "file:ts-client"
);
await $`pnpm install`;

async function removeDependency(packageName) {
  const packageJson = await readPackageJson();
  Reflect.deleteProperty(packageJson.dependencies, packageName);
  await writePackageJson(packageJson);
}

async function addDependencies(packageName, packageVersion) {
  const packageJson = await readPackageJson();
  const deps = packageJson.dependencies;
  Reflect.set(deps, packageName, packageVersion);

  const sortedKeys = Object.keys(deps).sort();
  const sortedObj = {};
  sortedKeys.forEach(key => {
    sortedObj[key] = deps[key];
  });

  Reflect.set(packageJson, "dependencies", sortedObj);

  await writePackageJson(packageJson);
}

async function readPackageJson() {
  const content = await fs.readFileSync("./package.json");
  return JSON.parse(content);
}

async function writePackageJson(packageJson) {
  await fs.writeFileSync(
    "./package.json",
    JSON.stringify(packageJson, null, 2) + "\r\n"
  );
}
