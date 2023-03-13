<script setup lang="ts"></script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="card w-96 bg-base-100 shadow-md mt-10">
    <div class="card-body">
      <h2 class="card-title">Free Plan</h2>
      <p>Billing Monthy</p>
      <button class="btn btn-primary w-40">Upgrade Now</button>

      <p class="text-sm font-semibold mt-5">Features</p>
      <ul class="mt-4">
        <li class="flex items-center gap-2 mb-3" v-for="(i, k) in 5" :key="k">
          <input
            type="radio"
            :name="`name${k}`"
            class="radio radio-success radio-sm"
            checked
          />
          Support feature {{ i }}
        </li>
      </ul>

      <p class="text-sm font-semibold mt-5">Current Uasge</p>
      <div class="mt-4 flex justify-between text-center">
        <div>
          <div class="radial-progress text-success" style="--value: 70">
            70%
          </div>
          <p class="mt-2">Device</p>
        </div>

        <div>
          <div class="radial-progress text-error" style="--value: 10">10%</div>
          <p class="mt-2">Network</p>
        </div>

        <div>
          <div class="radial-progress text-warning" style="--value: 30">
            30%
          </div>
          <p class="mt-2">Key</p>
        </div>
      </div>
    </div>
  </div>
</template>
