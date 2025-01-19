<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  width: 40px;
  aspect-ratio: 2;
  --loader-gradient: radial-gradient(
    circle closest-side,
    var(--vt-c-white, #fff) 90%,
    transparent 100%
  );
  background:
    no-repeat var(--loader-gradient) 0% 50%,
    no-repeat var(--loader-gradient) 50% 50%,
    no-repeat var(--loader-gradient) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  20% {
    background-position:
      0% 0%,
      50% 50%,
      100% 50%;
  }
  40% {
    background-position:
      0% 100%,
      50% 0%,
      100% 50%;
  }
  60% {
    background-position:
      0% 50%,
      50% 100%,
      100% 0%;
  }
  80% {
    background-position:
      0% 50%,
      50% 50%,
      100% 100%;
  }
}
</style>
