<template>
  <div class="notfound-container">
    <h1 class="notfound-title">Sorry!</h1>
    <h2 class="notfound-subtitle">We can’t seem to find the page you’re looking for.</h2>
    <p class="notfound-text">
      Please check the address, or
      <RouterLink to="/" class="notfound-link">return to the Steam Store</RouterLink>.
    </p>
  </div>
</template>

<style scoped>
.notfound-container {
  max-width: 800px;
  margin: 5rem auto;
  padding: 2rem;
  text-align: center;
  background-color: var(--vt-c-black);
  border: 1px solid var(--vt-c-black-soft);
  border-radius: 4px;
}

.notfound-title,
.notfound-subtitle,
.notfound-text {
  color: var(--vt-c-grey);
  margin: 0 0 1rem;
}

.notfound-title {
  font-size: 2rem;
}

.notfound-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.notfound-text {
  font-size: 1rem;
}

.notfound-link {
  color: var(--vt-c-blue-light);
  text-decoration: none;
}

.notfound-link:hover {
  color: var(--vt-c-white);
  text-decoration: underline;
}
</style>
