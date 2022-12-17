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
  @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

  body {
    font-family: 'Quicksand', sans-serif;
  }
</style>
