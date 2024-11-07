<script setup lang="ts">
const email = ref("");
const addUser = () => {
  alert("TODO");
};
</script>

<template>
  <footer>
    <OpenHours />

    <div>
      <h3>Elérhetőség</h3>
      <ul>
        <li>8699 Somogyvámos, Gauranga tér 1</li>
        <li>+36 30 436 3900</li>
        <li>turizmus@krisnavolgy.hu</li>
      </ul>
    </div>

    <div class="socials">
      <h3>Maradjunk kapcsolatban</h3>
      <ul class="df">
        <li>
          <NuxtLink to="https://www.facebook.com/krisnavolgy">
            <Icon name="ic:round-facebook" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.tiktok.com/@vallabhi_kanta">
            <Icon name="ic:baseline-tiktok" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.youtube.com/@krisnavolgy">
            <Icon name="line-md:youtube-filled" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.instagram.com/krisnavolgy">
            <Icon name="ri:instagram-fill" />
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div>
      <h3>Íratozz fel a hírlevélre!</h3>
      <input type="email" v-model="email" placeholder="Email" />
      <button @click="addUser">Feliratkozom</button>
    </div>

    <aside>
      <span>© 2024 Minden jog fenntartva</span>
    </aside>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--light);
  padding: 1em;
}

:deep(h3) {
  margin-top: 2em;
  border-bottom: 0.1em solid var(--bh-light);
  padding: 0 0 0.5em 0.5em;
}

:deep(ul) {
  padding: 0.5em;
}

aside {
  border-top: thin solid var(--bh-light);
  padding: 1em;
  font-size: 0.75rem;
}
.socials ul {
  font-size: 2rem;
  padding-top: 0;
}

@media screen and (min-width: 64rem) {
  footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
  }
  aside {
    grid-column: 1 / span 4;
  }
}
</style>
