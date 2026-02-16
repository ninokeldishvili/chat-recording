<script setup lang="ts">
const { createChat } = useChats();

function handleCreateChat() {
  createChat();
}
</script>

<template>
  <header class="app-header">
    <div class="flex justify-between items-center">
      <UButton icon="i-lucide-menu" color="primary" variant="ghost" />
      <UButton icon="i-lucide-plus" @click="handleCreateChat">New Chat</UButton>
    </div>
  </header>
</template>
