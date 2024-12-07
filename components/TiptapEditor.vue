<script setup>
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  })

  const emit = defineEmits(['update'])

  const editor = useEditor({
    content: props.content,
    onBlur: () => emit('update', editor.value.getHTML()),
    extensions: [TiptapStarterKit]
  })

  onBeforeUnmount(() => {
    unref(editor).destroy()
  })
</script>

<template>
  <section>
    <div v-if="editor">
      <button
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <Icon name="mdi:format-bold" />
      </button>
      <button
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <Icon name="mdi:format-italic" />
      </button>
      <button
        :class="{
          'is-active': editor.isActive('heading', { level: 2 })
        }"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        <Icon name="mdi:format-header-2" />
      </button>
      <button
        :class="{
          'is-active': editor.isActive('heading', { level: 3 })
        }"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        <Icon name="mdi:format-header-3" />
      </button>
      <button
        :class="{ 'is-active': editor.isActive('bulletList') }"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        <Icon name="mdi:format-list-bulleted" />
      </button>
      <button
        :class="{ 'is-active': editor.isActive('blockquote') }"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        <Icon name="mdi:format-quote-close" />
      </button>
    </div>
    <TiptapEditorContent :editor="editor" />
  </section>
</template>

<style scoped>
  section {
    background-color: var(--light);
  }
  button {
    background-color: var(--link-color);
    padding: 0.25em;
  }
  .is-active {
    background-color: var(--lighter-dark);
  }
</style>
<style>
  .ProseMirror {
    background: var(--light);
    padding: 0.25em;
  }
  .ProseMirror ul {
    list-style-type: disc;
    margin-left: 1.5em;
  }
  .ProseMirror li p {
    margin: 0;
  }
</style>
