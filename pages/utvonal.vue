<script setup></script>

<template>
  <h1><Icon name="material-symbols-light:directions-car" /> Útvonal</h1>

  <h3>Kaposvár felől</h3>
  <NuxtLink
    to="https://www.google.com/maps/dir/Kaposv%C3%A1r/Somogyv%C3%A1mos,+Krisna-v%C3%B6lgy"
  >
    <NuxtImg
      src="/images/megkozelites-kaposvar-felol.jpg"
      alt="Kaposvár felől"
      sizes="sm:100vw md:100vw lg:100vw"
      :modifiers="{ format: 'webp' }"
      />
    </NuxtLink>
    <p>
      Jután át Fonyód irányában, Somogyváron kell letérni Somogyvámosra.
    (Kaposvártól 35 km)
  </p>

  <InfoBlock>
    Több útvonal tervező javaslata ellenére <strong>Polányon keresztül</strong>
    nem vagyunk személyautóval megközelíthetőek!
  </InfoBlock>

  <h3>Budapest és Balaton felől</h3>
  <NuxtLink
    to="https://www.google.com/maps/dir/Budapest/Somogyv%C3%A1mos,+Krisna-v%C3%B6lgy"
  >
    <NuxtImg
      src="/images/megkozelites-budapest-felol.jpg"
      alt="Budapest és Balaton felől"
      sizes="sm:100vw md:100vw lg:100vw"
      :modifiers="{ format: 'webp' }"
    />
  </NuxtLink>
  <p>
    Fonyódon vagy Balatonbogláron át Lengyeltótin keresztül Kaposvár irányában,
    Somogyváron kell letérni Somogyvámosra. (Fonyódtól 30 km)
  </p>
</template>

<style scoped></style>
