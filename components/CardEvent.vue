<template>
    <div class="card_image">
    <img src="../public/images/cat.png" alt="">
        <div>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Eros tincidunt eu torquent nostra habitant dictumst nunc? Sodales justo interdum parturient euismod lobortis velit. </p>
        </div>
         <hr>

        <div class="informacoes">
            <div class="inf_time">
                <img src="../public/images/DateRange.png" alt="" class="vetor">
                <p>Sun, Sep 10, 2023 - Tue, Sep 12, 2023</p>
            </div>

            <div class="inf_time">
                <img src="../public/images/AccessTime.png" alt="" class="vetor">
                <p>09:00 AM - 05:00 PM</p>
            </div>

            <div class="inf_time">
                <img src="../public/images/local.png" alt="" class="vetor">
                <p>R. Todos os Santos, 286-552 - Salesianos, Juazeiro do Norte, Ceará</p>
            </div>

            <button class="ver">ver mais</button>


        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.informacoes{
    display: flex;
    flex-direction: column;
    margin-top:10px;
    gap: 10px;
    }
   .card_image {
    border: solid 2px rgba(0, 0, 0, 0.281);
    border-radius: 22px;
    padding: 14px;
    width: 400px;
    height: 100%;
   }
   .inf_time{
    display: flex;
    align-items: center;
    gap:10px;
    height: 30px;
   }
   .ver{
    margin-top: 15px;
   }

</style>