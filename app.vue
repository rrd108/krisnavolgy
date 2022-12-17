<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Főoldal</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap&family=Roboto&display=swap');

  :root {
    --light: #decf9b;
    --dark: #493e26;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Quicksand', sans-serif;
  }
  section {
    padding: 1em;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  small {
    font-size: 0.75rem;
  }

  .df {
    display: flex;
    gap: 1em;
  }
  .grid {
    display: grid;
    gap: 1em;
  }
</style>
