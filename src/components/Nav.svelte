<script>
	export let segment;
	import logoJuanetex from './../img/perfilJuanetex.png';

	var contador = 0
	var menu = "uno";
	const menuClick = ()=>{
      if (contador == 0) {
		  menu = "dos"
		  contador = 1;
	  } else{
          menu = "uno"
		  contador = 0;
	  }
	}

	const menuBack = ()=>{
		menu = "uno"
	}


</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,800;1,300;1,600&display=swap');

	header{
		background-image: url('hero.jpg');
		width: 100%;
		background-size: cover;
		background-position: center;
		position: relative;
		overflow: hidden;
	}
	header nav {
		height: 70px;
		background-color: #000;
		display: flex;
		justify-content: space-between;

	}
	.icono{
		display: none;
	}
	.enlaces{
		display: flex;
		height: 100%;
		width: 50%;
		justify-content: space-around;
		align-items: center;

	}
	.enlaces a{
		border-top: 1px solid transparent;
		border-bottom: 1px solid transparent;
		padding: 4px 0px;
		transition: 0.7s ease-out;
		color: #fff;
		text-decoration: none;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-size: 10px;
		margin: 0px 10px;
		
	}
	.enlaces a:hover, .active{
		border-top: 1px solid coral;
		border-bottom: 1px solid coral;
	}
	nav .logo{
		height: 100%;
		background-color: #fff;
		margin-left: 40px;
	}
	nav .logo img{
		object-fit: cover;
		height: inherit;
	}
	header .textos{
		text-align: center;
		color: rgb(0, 0, 0);
		margin-top: 150px;
	}
	header.textos h1{
		font-size: 100px;
		letter-spacing: 3px;
		font-weight: 600px;
		margin-bottom: 10px;
	}
	header.textos h2{
		font-size: 30px;
		font-weight: 600px;
	}
	/* clearfix */
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
	@media screen and (max-width: 750px){
		.icono{
			display: flex;
			justify-content: center;
			height: 30px;
			align-items: center;
			color: rgb(255, 255, 255);
			padding: 20px;
			z-index: 100;
			cursor: pointer;
			margin-right: 15px;
			background-color: transparent;
			font-size: 30px;
		}
		.enlaces{
			z-index: 2;
			position: fixed;
			height: 100vh;
			right: 0px;
			width: 100%;
			flex-direction: column;
			transition: all 1s ease;
			/*Exportamos el gradiente de fondo de la pagina UIGRADIENTS.COM*/
			background: #334d50;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #cbcaa5, #334d50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            
		}
		.enlaces a{
			font-weight: bold;
		font-size: 30px;
		}
		.uno{
			-webkit-clip-path: circle(0% at 100% 0%);
			clip-path: circle(0% at 100% 0%);
		
		}
		.dos{
			-webkit-clip-path: circle(150% at 100% 0%);
			clip-path: circle(150% at 100% 0%);
		}
	}
	@media screen and (max-width: 400px){
		nav .logo{
			margin-left: 20px;
		}
		.icono{
			margin-right: 10px;

		}
	}

</style>
<!-- Menu Responsive bonito -->
<header>
	<nav>
		<div class="logo">
			<img src="{logoJuanetex}" alt="">
		</div>
		<div class="icono" on:click="{menuClick}">
			<!-- los numero indican que es un menu hamburguesa -->
			<span>&#9776;</span>

		</div>
		<div class="enlaces {menu}">
		    <a on:click="{menuBack}" class="active" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Inicio</a>
			<a on:click="{menuBack}" aria-current="{segment === 'overoles' ? 'page' : undefined}" href="overoles">Overoles</a>
			<a on:click="{menuBack}" aria-current="{segment === 'atumedida' ? 'page' : undefined}" href="atumedida">Tu Medida</a>
			<a on:click="{menuBack}" aria-current="{segment === 'modelos' ? 'page' : undefined}" href="modelos">Modelos</a>
				
			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				 the blog data when we hover over the link or tap it on a touchscreen -->
				 <a on:click="{menuBack}" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Venta</a>
			<a on:click="{menuBack}" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Informacion</a>

        </div>
	</nav>	

</header>
