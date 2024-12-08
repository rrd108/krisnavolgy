<script setup>
  const content = defineModel({
    type: String,
    required: true
  })

  const emit = defineEmits(['update', 'generateContent'])

  const editor = useEditor({
    content: content.value,
    onBlur: () => emit('update', editor.value.getHTML()),
    extensions: [
      TiptapStarterKit,
      TiptapLink.configure({
        openOnClick: true,
        defaultProtocol: 'https',
        HTMLAttributes: {
          rel: null,
          target: null
        }
      })
    ]
  })

  const setLink = () => {
    const previousUrl = editor.value.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    if (url === null) {
      return
    }

    if (url == '') {
      editor.value.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  watch(content, (value) => {
    if (editor.value.getHTML() !== value) {
      editor.value.commands.setContent(value, false)
    }
  })

  onBeforeUnmount(() => {
    unref(editor).destroy()
  })
</script>

<template>
  <section class="rounded">
    <div v-if="editor">
      <button
        title="Félkövér"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <Icon name="mdi:format-bold" />
      </button>
      <button
        title="Dőlt"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <Icon name="mdi:format-italic" />
      </button>
      <button
        title="2. fejléc"
        :class="{
          'is-active': editor.isActive('heading', { level: 2 })
        }"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        <Icon name="mdi:format-header-2" />
      </button>
      <button
        title="3. fejléc"
        :class="{
          'is-active': editor.isActive('heading', { level: 3 })
        }"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        <Icon name="mdi:format-header-3" />
      </button>
      <button
        title="Lista"
        :class="{ 'is-active': editor.isActive('bulletList') }"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        <Icon name="mdi:format-list-bulleted" />
      </button>
      <button title="Link" :class="{ 'is-active': editor.isActive('link') }" @click="setLink">
        <Icon name="mdi:link" />
      </button>
      <button
        title="Link törlés"
        :disabled="!editor.isActive('link')"
        @click="editor.chain().focus().unsetLink().run()"
      >
        <Icon name="mdi:link-off" />
      </button>
      <button
        title="Idézet"
        :class="{ 'is-active': editor.isActive('blockquote') }"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        <Icon name="mdi:format-quote-close" />
      </button>
      |
      <button class="ai" title="Leírás" @click="emit('generateContent')">
        <Icon name="gravity-ui:magic-wand" />
      </button>
    </div>
    <TiptapEditorContent :editor="editor" />
  </section>
</template>

<style scoped>
  section {
    background-color: var(--light);
  }
  div {
    border-bottom: 1px solid var(--divider-color);
  }
  button {
    background-color: var(--link-color);
    padding: 0.5em;
    margin: 0.25em;
  }
  .ai {
    background-color: var(--secondary-link-color);
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
