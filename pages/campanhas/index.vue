<script lang="ts" setup>
import type { Campaign } from '~/shared/types/campaign';

const campanhas: Campaign[] = []
</script>

<template>
  <main>
  <div class="principal">
    <img src="/public/images/image 8.png" alt="" class="img_fundo">
   
    <section class="info_ongs">
      <div class="btn_nomeONGs">
        <button class="apoiar_button">Apoiar</button>

        <div class="logo_nome">
          <label for="">Nome Fictício</label>
          <img src="/public/favicon.ico" alt="">
        </div>
      </div>

      <section class="conteudo">
        <div class="info_tags"> 
          <div class="sobre">
            <h1 class="h1_sobre">sobre</h1>
            <h2>Lorem ipsum dolor sit amet. Et fuga nesciunt est </h2>
            <p>In enim tempora aut molestiae exercitationem et omnis modi et illo nulla 33 vitae aspernatur et sunt nulla. Est dolores cumque in quos facere ut quae temporibus sit.</p>
          </div>

          <h1 class="tags_h1">Tags</h1>
          <div class="tags">
            <button>Evento</button>
            <button>Ceará</button>
            <button>social</button>
            <button>Comunidade</button>
            <button>Cultura</button>
          </div>
        </div>

        <div class="imagens_descricao">
          <div class="title">
            <h1>imagens</h1> 
            <h1>ver todas</h1>
          </div>
          <div class="imgs">
            <img src="/public/images/image 9.png" alt="" >
            <img src="/public/images/image 9.png" alt="" >
            <img src="/public/images/image 9.png" alt="" >
            <img src="/public/images/image 9.png" alt="" >
            <img src="/public/images/image 9.png" alt="" >
          </div>

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

      </section>
    </section>

  </div>

  <div>
    <CardList>
    <CampaignCard v-for="(item, index) in campanhas" :item="item" :index="index" :key="item.id" />
    </CardList>
  </div>
</main>
</template>

<style>
main{
  padding: 0;
  margin: 0;
}
.img_fundo{
  width: 100%;
  bottom:300px;
}
.info_ongs{
  position: relative;
  bottom: 60px;
  margin: 0px 70px 0px 70px;
  background-color: white;
  border-radius: 5px;
}
.btn_nomeONGs{
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
  padding: 30px;

}

.logo_nome{
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 18px;
  color: #42A3DA;
  font-weight: bold;
}
.apoiar_button{
  width: 200px;
  height: 55px;
  border-radius: 7px;

}
.sobre{
padding: 20px;
border-radius: 6px;
border:2px solid #409EFF;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
}
.h1_sobre{
  font-size: 34px;
  color: #42A3DA;
  margin-bottom:40px;
}
h2{
  font-size: 24px;
  color: #333333a6;
}
.info_tags{
  width: 50%;
}
.tags_h1{
  margin-top: 10px;
  margin-bottom:25px;
  font-size: 34px;
}
.tags{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

}
button{
  height: 40px;
  background-color: #42A3DA;
  color: white;
  border-radius: 50px;
}
.conteudo{
  width: 100%;
  display:flex;
}
.imagens_descricao{
  display: flex;
  flex-direction:column ;
  width: 100%;
  gap: 10px;
  padding-left:50px ;
}
.imgs>img{
  width: 130px;
  height: 100px;
  border-radius:7px;
}
.imgs{
  display:flex;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.title{
  display: flex;
  justify-content: space-between;
}

</style>