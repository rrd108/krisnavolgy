<script setup lang="ts">
  const year = new Date().getFullYear()
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

    <SubscribeForm>
      <h3>Íratozz fel a hírlevélre!</h3>
    </SubscribeForm>

    <aside>
      <span>© 1996-{{ year }} Minden jog fenntartva</span>
      <p>ISKCON alapító ācārya: Ő Isteni Kegyelme A. C. Bhaktivedanta Swāmi Prabhupāda</p>
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
    text-align: left;
  }

  :deep(ul) {
    padding: 0.5em;
  }

  aside {
    margin-top: 2em;
    border-top: thin solid var(--bh-light);
    padding: 1em;
    font-size: 0.75rem;
  }
  .socials ul {
    font-size: 2rem;
    padding-top: 0;
  }

  .error {
    color: var(--error, #dc3545);
  }

  @media screen and (min-width: 42rem) {
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
