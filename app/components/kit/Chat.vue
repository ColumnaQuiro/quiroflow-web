<script setup lang="ts">
// The kit's "chat" fragment (public/kit/ui/chat): a WhatsApp conversation
// with the receptionist's answer and the two sources it used. ui.js loops
// the answer once the kit scripts start. answer: [before, bold, after].
interface ChatCopy {
  title: string
  channel: string
  day: string
  question: string
  answer: string[]
  sources: string[]
  reply: string
  input: string
}
defineProps<{ chat: ChatCopy }>()
</script>

<template>
  <div class="ui ui-panel ui-chat" data-ui="chat">
    <div class="ui-head"><span class="ui-agent" aria-hidden="true" /><div class="ui-title">{{ chat.title }}</div><span class="ui-chat__online">{{ chat.channel }}</span><span class="ui-spacer" /></div>
    <div class="ui-chat__body">
      <div class="ui-chat__day">{{ chat.day }}</div>
      <div class="ui-msg ui-msg--me" data-chat-q><span class="ui-msg__text">{{ chat.question }}</span></div>
      <div class="ui-msg ui-msg--bot" data-chat-a>
        <span class="ui-agent ui-msg__av" aria-hidden="true" />
        <span class="ui-msg__col">
          <span class="ui-chat__typing" aria-hidden="true"><i /><i /><i /></span>
          <span class="ui-chat__answer">{{ chat.answer[0] }}<b>{{ chat.answer[1] }}</b>{{ chat.answer[2] }}</span>
          <span class="ui-chat__srcs">
            <span class="ui-chat__src"><svg class="ui-icon" viewBox="0 0 16 16"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5" /><path d="M2.5 6.6h11M5.6 2v2M10.4 2v2" /></svg>{{ chat.sources[0] }}</span>
            <span class="ui-chat__src"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg>{{ chat.sources[1] }}</span>
          </span>
        </span>
      </div>
      <div class="ui-msg ui-msg--me"><span class="ui-msg__text">{{ chat.reply }}</span></div>
    </div>
    <div class="ui-chat__input"><span class="ui-chat__ph">{{ chat.input }}</span><span class="ui-chat__send" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" /></svg></span></div>
  </div>
</template>
