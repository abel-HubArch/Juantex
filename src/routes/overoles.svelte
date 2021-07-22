<script>
	import VideoHeaderOveroles from './../components/VideoHeaderOveroles.svelte';
    import imgParteDos from './../img/overoles/imgParteDos.png'
    import fondoVentanaDos from './../img/overoles/fondoParteDos.png'
    import muestraDeCrear from './../img/overoles/muestraDeCrear.png'
    import muestrasvg from './../img/overoles/overolsvg.png'
    import muestrapng from './../img/overoles/overolDisenoPNG.png'
    import caracteristicasDeModelo from "./../img/overoles/CaracteristicasModelo.png";
    import garatiaGratuita from './../img/overoles/garantiaGratuitaIMG.png'
    import bonoPorCompra from './../img/overoles/bonosPorCompra.png'
    import servicioDelivery from './../img/overoles/servicioDeliveryIMG.png'
    import overolUno from './../img/overoles/venta/overolesUno.png'
    import overolDos from './../img/overoles/venta/overolDos.png'
    import overolTres from './../img/overoles/venta/overolTres.png'
    import chalecoUno from './../img/overoles/venta/chalecoUno.png'
    import chalecoDos from './../img/overoles/venta/chalecoDos.png'
    import chalecoTres from './../img/overoles/venta/chalecoTres.png'
    import imgFinal from './../img/overoles/ultimaParte.png'
    import {blur, slide, fade, fly} from 'svelte/transition';

    let y;
    $: console.log(y);

    const cotizar = ()=>{
        var cantidad = prompt("Que Cantidad Desea?");
        if (cantidad) {
            window.open(`https://api.whatsapp.com/send?phone=+59175270413&text=Cotizar%20Overoles%20Unidades:${cantidad}%20CODIGO%20DE%20DESCUENTO:%20ZaxSdOveroles`)
        }
    }
    const cotizarC = ()=>{
        var cantidad = prompt("Que Cantidad De Chalecos Desea?");
        if (cantidad) {
            window.open(`https://api.whatsapp.com/send?phone=+59175270413&text=Cotizar%20Overoles%20Unidades%20De%20Chalecos:${cantidad}%20CODIGO%20DE%20DESCUENTO:%20ZaxSdChalecOs`)
        }
    }

</script>

<style>
    
.overoles{
    padding: 0px 0px;
}
.overoles{
    z-index: -1;
    color: white;
    padding: 0px 0px;
}
.overoles .header{
    height: 90vh;
    background-color: rgb(255, 255, 255);
}
.overoles .header .parteUno{
    width: 100%;
    height: 53%;
    background-color: black;
    padding-top: 20px;
    text-align: center;
}
.overoles .header .parteUno h1{
       font-family: 'Open Sans', sans-serif;
       font-weight: 700;
       text-transform: uppercase;
       font-size: 40px;
}
.overoles .header .parteUno h2{
    margin-top: 25px;
    font-weight: 600;
    text-transform: uppercase;
}
.overoles .header .parteDos{
    color: black;
    display: flex;
    text-align: center;
}
.overoles .header .parteDos img{
    height: 40.8vh;
    margin-top: -3px;
}
.overoles .header .parteDos h2{
    margin-left: -40px;
    text-transform: uppercase;
    font-size: 18px;
    
}
.overoles .header .parteDos p{
    margin-left: -40px;
    font-style: italic;
    font-weight: lighter;
}
.overoles .header .parteDos button{
    margin-left: -40px;
    background-color: black;
    color: white;
    font-weight: 600;
    width: 127px;
    height: 26px;
    border: none;
}
.overoles .segundaParte{
    height: 100vh;
}
.overoles .segundaParte .laParteDos{
    height: 65%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 20px;
    text-align: center;
}
.overoles .segundaParte .laParteDos h1{
    font-family: 'Open Sans', sans-serif;
       font-weight: 700;
       text-transform: uppercase;
       font-size: 25px;
}
.overoles .segundaParte .laParteDos p{
    font-family: 'Open Sans', sans-serif;
       font-weight: 400;
       text-transform: uppercase;
       font-size: 15px;
}
.overoles .segundaParte .laParteTres{
    height: 105vh;
    background-color: black;
    padding: 5px;
    width: 97%;
    margin: auto;


}
.overoles .segundaParte .laParteTres .queOfrecemos{
    text-align: right;
    margin-right: 20px;
    text-transform: uppercase;
    font-weight: 400;

}
.overoles .segundaParte .laParteTres .queOfrecemos h2{
    font-weight: 700;
}
.overoles .segundaParte .laParteTres .calidadText{
    text-align: center;
    display: flex;
    width: 100%;
}
.overoles .segundaParte .laParteTres .calidadText .tetx{
    width: 70%;
}
.overoles .segundaParte .laParteTres .calidadText .imgEjm{
 margin-left: 30px;
 width: 50%;
}
.overoles .segundaParte .laParteTres .calidadText .imgEjm img{
    width: 150px;
    height: 300px;
}
.overoles .segundaParte .laParteTres .calidadText .imgEjm .imgListo{
    width: 150px;
    height: 300px;
}
.overoles .segundaParte .laParteTres .pantallaDosSegundaParte{
    text-align: center;

}
.overoles .segundaParte .laParteTres .pantallaDosSegundaParte img{
    width: 350px;
    margin-top: 40px;
}
.overoles .segundaParte .garantias{
    height: 100vh;
    width: 100%;
    color: black;
}
.overoles .segundaParte .garantias .queOfrecemos{
    text-align: right;
    margin-right: 20px;
    text-transform: uppercase;
    font-weight: 400;
}
.overoles .segundaParte .garantias .queOfrecemos h2{
    font-weight: 700;
}
.overoles .segundaParte .garantias .garantiaGratuita{
    text-align: center;
}
.overoles .segundaParte .garantias .garantiaGratuita h1{
    font-weight: 700;
    color: chocolate;
}
.overoles .segundaParte .oferta{
    background-color: black;
    width: 100%;
    height: 72px;
    color: white;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
}
.overoles .segundaParte .oferta h1{
    font-weight: 700;
}
.overoles .segundaParte .venta{
    height: 100vh;
    text-align: center;
}
.overoles .segundaParte .venta .descuento h1{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    margin: 20px 0px;
}
.overoles .segundaParte .venta .accion{
    margin: auto;
    text-align: center;
}
.overoles .segundaParte .venta .accion h1{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    margin: 20px 0px;
}
.overoles .segundaParte .venta .accion .muestras{
    display: flex;
    justify-content: center;
    text-align: center;
}
.overoles .segundaParte .venta .accion .muestras img{
    width: 110px;
    margin: 20px 5px;
}
@media screen and (max-width: 503px){
    .overoles .segundaParte .laParteDos img{
        width: 50%;
    }
    .overoles .segundaParte .laParteTres .pantallaDosSegundaParte img{
        width: 50%;
        
}
}
@media screen and (max-width: 349px){
    .overoles .header .parteDos h2{
    margin-left: -40px;
    text-transform: uppercase;
    font-size: 10px;
    
}
.overoles .header .parteDos p{
    margin-left: -40px;
   font-size: 11px;
}
}
@media screen and (max-height: 685px){
    .overoles .segundaParte .laParteDos img{
        display: none;
    }
    .overoles .segundaParte .laParteTres .pantallaDosSegundaParte img{
        display: none;
        
}
}

</style>
<svelte:window bind:scrollY={y}/>

<div class="overoles">
    <div class="header">
        <div class="parteUno">
            <h1>Overoles Industriales</h1>
            <h2>Hecho a tu estilo</h2>
            <VideoHeaderOveroles></VideoHeaderOveroles>
        </div>
        <div class="parteDos">
            <div class="imgParteDos">
              <img src="{imgParteDos}" alt="Overol Industrial"> 
            </div>
            <div class="textoParteDos">
                {#if y >= 20}
                <h2 transition:blur>Hecho a tu estilo</h2>
                <p transition:blur>Un overol es mas que <br> una prenda, es una herramienta que optimiza <br> tu trabajo.</p>
                <p transition:blur>Hecha con medidas <br> y moldes con el modo de su  rubro exclusivamente para  usted </p>
                <button><a href="overoles/#overoles">PERSONALIZAR</a></button>
                {:else}
                <h2 style="visibility: hidden;">Hecho a tu estilo</h2>
                <p style="visibility: hidden;">Un overol es mas que <br> una prenda, es una herramienta que optimiza <br> tu trabajo.</p>
                <p style="visibility: hidden;">Hecha con medidas <br> y moldes con el modo de su  rubro exclusivamente para  usted </p>
                <button>PERSONALIZAR</button>
                {/if}
            </div>
        </div>
    </div>
    <div class="segundaParte">
       <div class="laParteDos" style="background-image: url('{fondoVentanaDos}');">
         <h1>Podemos <br> Crear?</h1>
         <p>Podemos convertir casi todas tus <br> solicitudes en realidad.</p>
         <p>Esta vez podemos ofrecerle lo que esta buscando, le gustaria ver nuestros <br> modelos mas recientes?</p>
       {#if y >= 450}
           <img src="{muestraDeCrear}" alt="" transition:slide>
       {/if}
        
       </div>
       <div class="laParteTres">
           <div class="queOfrecemos">
            <h2>Que ofrecemos?</h2>    
           </div>
           <div class="calidadText">
               <div class="tetx">
                <h1>CALIDAD</h1>
                <p>Cansado de bordados con material de mala calidad?, de costuras y tela de material barato?</p>
                <p>Te ofrecemos lo mejor en materiales!</p>
                <p>Con tela de buen material, bordados personalizados con las mejores costuras.</p> 
               </div>
               <div class="imgEjm">
                   {#if y >= 930}
                        <img class="imgListo" src="{muestrapng}" alt="" transition:blur={{y:200, duration:1000, delay:500}}>
                   {:else}
                        <img src="{muestrasvg}" alt="" transition:blur={{delay: 100}} >
                   {/if}
               </div>
            </div>
            <div class="pantallaDosSegundaParte">
                {#if y >= 1080}
                <h1 transition:blur>Diseño</h1>
                <p transition:blur>Te ofrecemos el mejor diseño para tu empresa, <br> necesitas overoles para construccion?. <br> Pues te mostramos los diseños</p>
                
                {/if}
                {#if y >= 1400}
                 <img src="{caracteristicasDeModelo}" alt="" transition:blur>
                {/if}
              
            </div>
       </div>
       <div class="garantias">
                   <div class="queOfrecemos">
                    <h2>Que ofrecemos?</h2>    
                   </div>
            <div class="garantiaGratuita">
                <h1>GARANTIA GRATUITA</h1>
                {#if y >= 1700}
                       <img src="{garatiaGratuita}" alt="" transition:fly>
                {/if}
              
            </div>

            <div class="garantiaGratuita">
                <h1>BONOS POR COMPRA</h1>
                {#if y >= 2100}
                <img src="{bonoPorCompra}" alt="" transition:fly>
                {/if}
              
            </div>

            <div class="garantiaGratuita">
                <h1>Envios a Toda Bolivia</h1>
                <img src="{servicioDelivery}" alt="">
            </div>
            <div class="oferta">
                <h1>TENEMOS UN OFERTA ESPECIAL PARA TI</h1>
            </div>
   
            <div class="venta" id="overoles">
                <div class="descuento">
                    <h1>Accede a un descuento de</h1>
                </div>
                <div class="accion">
                    <div class="titulo"><h1>OVEROLES</h1></div>
                    <div class="muestras">
                        {#if y >= 3000}
                        <img on:click="{cotizar}" src="{overolUno}" alt="" transition:fly={{duration:300, delay: 200}}>
                        <img on:click="{cotizar}" src="{overolDos}" alt="" transition:fly={{duration:300, delay: 1000}}>
                        <img on:click="{cotizar}" src="{overolTres}" alt="" transition:fly={{duration:300, delay: 700}}>
                        {/if}

                    </div>
                </div>
                <div class="accion">
                    <div class="titulo"><h1>CHALECOS</h1></div>
                    <div class="muestras">
                        {#if y >= 3350}
                        <img on:click="{cotizarC}" src="{chalecoUno}" alt="" transition:fly={{duration:300, delay: 200}}>
                        <img on:click="{cotizarC}" src="{chalecoDos}" alt="" transition:fly={{duration:300, delay: 1000}}>
                        <img on:click="{cotizarC}" src="{chalecoTres}" alt="" transition:fly={{duration:300, delay: 700}}>
                        {/if}
               
                </div>
                <div class="imgFinal">
                    <img src="{imgFinal}" alt="" width="300">
                </div>
                <div class="ropaIndustrial">
                    <h2>Ropa Industrial Juanetex</h2>
                </div>
                </div>
            </div>
         </div>
     
    </div>
</div>

