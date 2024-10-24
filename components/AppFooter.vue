<script setup lang="ts">
const email = ref("");
const addUser = () => {
  alert("TODO");
};
</script>

<template>
  <footer>
    <div>
      <h3>Nyitvatartás</h3>
      <ul>
        <li>Kedd - vasárnap: 10:00-17:00</li>
      </ul>
    </div>

    <div>
      <h3>Elérhetőség</h3>
      <ul>
        <li>8699 Somogyvámos, Gauranga tér 1</li>
        <li>+36 30 436 3900</li>
        <li>turizmus@krisnavolgy.hu</li>
      </ul>
    </div>

    <div>
      <h3>Maradjunk kapcsolatban</h3>
      <!--ul class="df">
        <li>
          <NuxtLink to="https://www.facebook.com/krisnavolgy">
            <font-awesome :icon="['fab', 'facebook']" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.tiktok.com/@vallabhi_kanta">
            <font-awesome :icon="['fab', 'tiktok']" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.youtube.com/@krisnavolgy">
            <font-awesome :icon="['fab', 'youtube']" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.instagram.com/krisnavolgy">
            <font-awesome :icon="['fab', 'instagram']" />
          </NuxtLink>
        </li>
      </!--ul-->
    </div>

    <div>
      <h3>Íratozz fel a hírlevélre!</h3>
      <input type="email" v-model="email" placeholder="Email" />
      <button @click="addUser">Feliratkozom</button>
    </div>

    <aside>
      <span>© 2024 Minden jog fenntartva</span>
      <span>Oldaltérkép TODO</span>
      <span>Felhasználási feltételek TODO</span>
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
span {
  margin: 0 1em;
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
