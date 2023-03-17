<template>
  <ul>
    <li class="cursor-pointer" @click="changeLocale('fr')">FR</li>
    <li class="cursor-pointer" @click="changeLocale('en')">EN</li>
  </ul>
</template>

<script>
import { i18n, changeLocale } from "@/i18n";
export default {
  name: "SwitchLocal",
  setup() {
    return {
      changeLocale,
    };
  },
};
</script>
