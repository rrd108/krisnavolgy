<template>
  <div id="app">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap&family=Open+sans&display=swap');

  :root {
    --light: #decf9b;
    --dark: #493e26;
    --header-dynamic-height: 7dvh;
    --header-height: 7vh;
    --main-dynamic-height: calc(100dvh - var(--header-dynamic-height));
    --main-height: calc(100vh - var(--header-height));
    --hero-padding-right: 1em;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,
  input {
    font-family: 'Open sans', sans-serif;
  }
  #app {
    overflow-x: hidden;
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
  }
  h1 {
    margin: 1em 0;
  }
</style>
