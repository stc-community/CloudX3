import "zx/globals";

console.log("Clone latest code to temp ...");
await $`git clone https://github.com/stc-community/iot-depin-protocol.git temp`;

console.log("Copy latest ts-client ...");
await $`cp -rf temp/ts-client ./`;

console.log("Copy latest vue/src/composables ...");
await $`cp -rf temp/vue/src/composables ./src`;

console.log("Clean temp dir");
await $`rm -rf temp`;
