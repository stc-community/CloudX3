<template>
  <h2>Authorized Devices</h2>
  <p class="text-slate-500 mt-2 leading-6">
    In this section, you can create and manage unique authentication tokens for
    your authorized devices. These tokens act as digital keys, ensuring that
    only trusted devices can send messages to your project and have them
    accepted.
  </p>

  <label for="device-wallet-modal" class="btn btn-primary mt-5">
    <IconifyIconOnline
      class="mr-2"
      icon="ri:wallet-fill"
      width="20px"
      height="20px"
    />New Device
  </label>

  <div class="grid grid-cols-2 gap-5 mt-10">
    <div
      class="border border-slate-200 rounded-md p-5 shadow-sm hover:shadow-lg"
    >
      <p class="text-slate-800">Device Info</p>
      <p class="text-slate-500 mt-2 text-xs">Information about this device</p>

      <div class="flex justify-center items-center text-slate-400 my-5">
        <IconifyIconOnline
          icon="ri:bar-chart-line"
          width="20px"
          height="20px"
        />
        <p class="ml-2">No data to show</p>
      </div>
    </div>
  </div>
</template>
