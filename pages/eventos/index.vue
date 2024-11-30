<script lang="ts" setup>
import type { Event } from '~/shared/types/event';

const eventos: Event[] = []
</script>

<template>
  <main>
    <h1>Eventos</h1>
    <img src="/public/images/Cat.png" alt="" class="cat_img">
    <CardList>
    <EventCard v-for="(item, index) in eventos" :item="item" :index="index" :key="item.id" />
    </CardList>
<hr>
    <div class="Info_eventos">
      <div class="imagens_descricao">
          <div class="descricao">
            <h1>Descrição</h1>

            <h2 class="evento_solidario">🌟 Evento Solidário - Unidos pelo Bem 🌟</h2>
            <p>Participe do nosso evento especial e ajude a transformar vidas! Este é um momento de união, solidariedade e impacto positivo na comunidade.</p>
            <h2>📅 Informações do Evento:</h2>

            <ul>
              <li>Data: 25 de novembro de 2024</li>
              <li>Horário: 14h às 20h</li>
              <li>Local: Centro Comunitário Esperança, Rua Lorem Ipsum, 123 - São Paulo, SP</li>
            </ul>

            <h2>🎉 O que esperar?</h2>

            <ul>
              <li>Palestras inspiradoras: Conheça histórias de superação e aprenda com especialistas em temas como:</li>
              <li>Sustentabilidade</li>
              <li>Inclusão social</li>
              <li>Empreendedorismo solidário</li>
            </ul>
            <h2>🎯 Como Participar?</h2>

            <ul>
              <li>Faça sua inscrição clicando aqui</li>
              <li>Traga 1kg de alimento não perecível como contribuição.</li>
              <li>Convide seus amigos e familiares!</li>
            </ul>

            <h2>🤝 Apoio e Parceiros</h2>
            <p>Agradecemos às organizações que tornaram este evento possível:</p>

            <ul>
              <li>Instituto Lorem Ipsum</li>
              <li>Fundação Solidária</li>
              <li>Voluntários Unidos</li>
            </ul>

            <h2>✨ Juntos, podemos fazer a diferença!</h2>
            <p>Não perca essa oportunidade de contribuir para um futuro melhor. Venha fazer parte dessa transformação!
              Para mais informações, entre em contato:</p>
              <p>📧 contato@eventosolidario.com </p>
                <p>📞 (11) 1234-5678</p>
          </div>
      </div>
      <hr class="hr2">
      <div class="info_tags">
        <div class="sobre">
            <h1 class="h1_sobre">Imformações</h1>
            <p class="P_info">📅 Sun, Sep 10, 2023 - Tue, Sep 12, 2023</p>
            <p class="P_info">🕙09:00 AM - 05:00 PM</p>
            <p class="P_info">📍
              R. Todos os Santos, 286-552 - Salesianos, Juazeiro do Norte, Ceará</p>
            <p>In enim tempora aut molestiae exercitationem et omnis modi et illo nulla 33 vitae aspernatur et sunt nulla. Est dolores cumque in quos facere ut quae temporibus sit.</p>
          </div>
          
        <h1>tags</h1>
        <div class="tags">
            <button>Evento</button>
            <button>Ceará</button>
            <button>social</button>
            <button>Comunidade</button>
            <button>Cultura</button>
          </div>
      </div>
    </div>
  </main>
</template>

<style>
main{
  width: 100%;
  padding: 5px;
  margin-top: 30px;
}
.P_info{
  margin: 5px 0px 5px 0px;
}
.teste{
  width: 100%;
  background-color: aqua;
}
.cat_img{
  width: 70%;
}
.descricao{
  width: 90%;
}
hr{
  margin-top: 30px;
  margin-bottom: 40px;
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0.432);
}
.hr2{
  width: 1px;
  position: relative;
  height: 500px;
  right:50px;
  top: 25px;
  border: 1px solid rgba(0, 0, 0, 0.432);
}
.Info_eventos{
  display: flex;
}
.tags{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
}
.info_tags{
  margin-top:50px;
}

</style>