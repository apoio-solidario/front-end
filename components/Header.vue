<template>
  <header>
    <div class="container">
      <a href="/">
        <Logo />
      </a>

      <nav>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/campanhas/">Campanhas</a>
          </li>
          <li>
            <a href="/eventos/">Eventos</a>
          </li>
          <li>
            <a href="/ongs/">ONGs</a>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <PrimaryLink href="/sou-uma-ong/">
              Sou uma ONG
            </PrimaryLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style>
header {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: space-between;
}

nav ul {
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

nav ul li {
  height: fit-content;
}
</style>