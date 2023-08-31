# cosmos

After https://github.com/stc-community/iot-depin-protocol changes, we should sync two folers:

- `ts-client` for RPC call and data types
- `composables` for component function use

## 2 Steps to update client SDK

STEP1: COPY deps from iot-depin-protocol
```
cp -rf iot-depin-protocol/ts-client CloudX3
cp -rf iot-depin-protocol/vue/src/composables CloudX3/src/
```

STEP2: Reinstall `stc-community-iot-depin-protocol-client-ts`

1. delete `"stc-community-iot-depin-protocol-client-ts": "file:ts-client"` in package.json
2. RUN 
```bash
$ pnpm install --registry=https://registry.npmmirror.com
```
3. add `"stc-community-iot-depin-protocol-client-ts": "file:ts-client"` in package.json
4. RUN
```bash
$ pnpm install stc-community-iot-depin-protocol-client-ts --registry=https://registry.npmmirror.com
```

## Others

Data types spec in `tc-client/stccommunity.iotdepinprotocol.iotdepinprotocol/types.ts`
