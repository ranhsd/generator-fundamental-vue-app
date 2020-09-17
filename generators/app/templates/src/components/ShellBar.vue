<template>
  <fd-shell-bar>
    <fd-shell-bar-group position="start">
      <fd-shell-bar-logo
        class="w-20 h-20 align-middle"
        :src=logo
      />
      <fd-shell-bar-product-title>Graph</fd-shell-bar-product-title>
    </fd-shell-bar-group>
    <fd-shell-bar-group position="end">
      <fd-shell-bar-actions>

      </fd-shell-bar-actions>
    </fd-shell-bar-group>
  </fd-shell-bar>
</template>

<script>
import logo from "@/assets/sap_logo.svg";
export default {
  name: "ShellBar",
  data(){
    return {
      logo
    }
  }
}
</script>