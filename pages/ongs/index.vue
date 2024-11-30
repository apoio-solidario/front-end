<script lang="ts" setup>
import type { ONG } from "~/shared/types/ong";

const ongs: ONG[] = [];
</script>

<template>
  <div class="completo">
    <main>
      <img src="/images/image 8.png" alt="" class="logo_principal" />
    </main>

    <div class="logo_social">
      <div class="logo_compartilhar">
        <img src="/public/apple-touch-icon.png" alt="" class="img_social" />
        <h1>Apoio Solidário</h1>
        <label>Anumais</label>
      </div>
      <div class="botoes">
        <a href="#" class="btn_">salvar</a>
        <a href="#" class="btn_">Compartilhar</a>
      </div>
    </div>

    <div class="informaçoes">
      <h1>Sobre</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
      </ul>
    </div>
    <h2>imagens</h2>

    <div class="cartao_img">
      <img src="/images/image 9.png" alt="" class="img_cartao" />
      <img src="/images/image 9.png" alt="" class="img_cartao" />
      <img src="/images/image 9.png" alt="" class="img_cartao" />
      <img src="/images/image 9.png" alt="" class="img_cartao" />
    </div>
    <h2>Campanhas</h2>

    <div class="campanhas">
      <img src="/images/image 9.png" alt="" class="img_cartao1" />
      <img src="/images/image 9.png" alt="" class="img_cartao1" />
    </div>

    <h2>Eventos</h2>

    <section class="eventos">
      <div class="event">
        <img src="/images/image 9.png" alt="" class="img_cartao1" />
      </div>
      <div class="event">
        <img src="/images/image 9.png" alt="" class="img_cartao1" />
      </div>
    </section>

    <CardList>
      <ONGCard
        v-for="(item, index) in ongs"
        :item="item"
        :index="index"
        :key="item.id"
      />
    </CardList>
  </div>
</template>

<style>
main {
  padding: 0;
  margin: 0;
}
.logo_principal {
  width: 100%;
}
.logo_social {
  margin: 15px 30px 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 0px 15px;
  position: relative;
  bottom: 75px;
}
.img_social {
  width: 90px;
  border: 7px solid rgb(255, 255, 255);
  border-radius: 50%;
}
.btn_ {
  padding: 5px 16px 5px 16px;
  margin: 10px;
  border: 1px solid rgba(14, 14, 14, 0.486);
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.568);
  position: relative;
  right: 70px;
}
.informaçoes {
  padding: 10px 15px 12px 15px;
  margin: 15px 30px 0px 30px;
  width: 65%;
}
.cartao_img {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px 0px 15px;
  margin: 15px 30px 0px 30px;
  gap: 10px;
  width: 70%;
}
.img_cartao {
  width: 170px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 6px;
}
.campanhas {
  padding: 10px 15px 0px 15px;
  margin: 15px 30px 0px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.img_cartao1 {
  width: 270px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 6px;
}
.eventos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 30px 0px 30px;
  padding: 10px 15px 0px 15px;
}
h2 {
  margin: 15px 30px 0px 30px;
  padding: 10px 15px 0px 15px;
}
</style>
