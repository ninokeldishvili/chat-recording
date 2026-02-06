<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

const appConfig = useAppConfig();
console.log("App Config:", appConfig);

const title = computed(() => {
  return chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title;
});

useHead({
  title,
});
</script>

<template>
  <ChatWindow :chat :messages @send-message="sendMessage" />
</template>
