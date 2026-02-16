<script setup lang="ts">
const route = useRoute();

const { chat, messages, sendMessage } = useChat(route.params.id as string);

const appConfig = useAppConfig();
const typing = ref(false);

const title = computed(() => {
  return chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title;
});

useHead({
  title,
});

const handleSendMessage = async (message: string) => {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
};
</script>

<template>
  <ChatWindow :chat :messages :typing @send-message="handleSendMessage" />
</template>
