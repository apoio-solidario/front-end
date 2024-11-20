<template>
    <section class="cardCamp">
        <img src="../public/images/Image.png" alt="" class="Raccoon">

        <div class="inf">
            <p class="local">Juazeiro do Norte - CE</p>
            <h1>lorem imput....</h1>
            <p class="inf_camp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>

        <div class="btn">
            <button class="ver">Ver mais</button>
            <button class="btn_WH-50"><img src="../public/images/Heart.png" alt="" ></button>
            <button class="btn_WH-50"><img src="../public/images/Share.png" alt="" ></button>
        </div>

        <div class="test"></div>
    </section>
    
</template>

<script>
export default {
   
}
</script>

<style scoped>
.cardCamp {
    border: solid 2px #42A3DA;
    height: 70%;
    width: 425px;
    border-radius: 22px;
}
.Raccoon{
    position: relative;
    width: 425px;
    right: 1.7px;
    bottom: 2px;
}
.local{
    margin-bottom: 25px;
    font-weight: 600;
}
.inf{
    margin-left: 20px;
}

.btn{
    display: flex;
    justify-content: space-around;
    margin: 25px 15px 10px 15px;
}
.btn_WH-50{
    padding: 10px;
}
.ver{
    width: 230px;
    font-size: larger;
}
.inf_camp{
    font-size: 16px;
    width:300px;
}
</style>