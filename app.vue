<template>
  <div>
    <!--nav>
      <ul>
        <li><NuxtLink to="/">Főoldal</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </!--nav-->
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
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open sans', sans-serif;
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
