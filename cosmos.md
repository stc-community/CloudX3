# cosmos

After https://github.com/stc-community/iot-depin-protocol changes, we should sync two folers:

- `ts-client` for RPC call and data types
- `composables` for component function use

## Scrips

```bash
# sync remote ts-client and composables, reinstall packages to clear package cache
sync:cosmosall

# only sync ts-client and composables(download and replace)
sync:cosmos

# only reinstall packages(clear the cache and reinstall)
sync:package
```

## Data camel case style

struct HelloWorld

apiData helloWorld
