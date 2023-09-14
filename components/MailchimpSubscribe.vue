<script setup lang="ts">
const props = defineProps({
  content: Object,
});
</script>

<template>
  <section>
    <h2>{{ content.title }}</h2>
    <p>{{ content.cta }}</p>
    <!--To change the mailing list change the form action post url, and the two value="" fields for name="u" and name="id"-->
    <form
      action="https://webmania.us8.list-manage.com/subscribe/post"
      method="POST"
    >
      <input type="hidden" name="u" value="ad07ffcfc8e16e5c5f1595fa3" />
      <input type="hidden" name="id" value="921fcd7cbf" />
      <input
        class="emailInput"
        type="email"
        autocapitalize="none"
        autocorrect="off"
        name="MERGE0"
        id="MERGE0"
        size="25"
        value=""
        :placeholder="content.placeholderEmail"
      />
      <input
        type="submit"
        class="formEmailButton"
        name="submit"
        :value="content.buttonLabel"
      />
      <div class="disclaimer">
        By submitting your email, you agree to our Terms and Privacy Notice.
      </div>
    </form>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  padding: 2.5em 0;
}
h2,
p {
  margin-bottom: 1em;
}
.emailInput {
  border: thin solid var(--light);
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
}
.formEmailButton {
  background-color: var(--dark);
  color: #fff;
  border: none;
  padding: 0.6rem;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
}
.disclaimer {
  font-size: xx-small;
}
</style>
