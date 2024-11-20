<template>
    <div class="card_image">
        <img src="../public/images/Dog.png" alt="" class="dog">

        <div class="imformacoes">
            <div class="inf_img">
                <img src="../public/images/Vector.png" alt="" class="vetor">
                <p>81096086-27ab-492c-bb80-db800b...</p>
            </div>

            <div class="inf_time">
                <img src="../public/images/AccessTime.png" alt="" class="vetor">
                <p>12 de nov. de 2024</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.imformacoes{
    display: flex;
    flex-direction: column;
    margin-top:10px;
    gap: 10px;
    }
    .dog {
        width: 100%;

    }
   .card_image {
    border: solid 2px rgba(0, 0, 0, 0.281);
    border-radius: 25px;
    width: 340px;
    height: 370px;
    padding: 12px;
   }
   .inf_img{
    display: flex;
    align-items: center;
    gap: 10px;
    height: 30px;
   }
   .inf_time{
    display: flex;
    align-items: center;
    gap:10px;
    height: 30px;
   }
</style>