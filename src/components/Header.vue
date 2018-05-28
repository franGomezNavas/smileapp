<template>
		<b-navbar class="navbar navbar-toggleable navbar-dark bg-info">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<ul class="navbar-nav">
				<b-navbar-brand href="/">
     			<img id="logo" src="src/assets/inconSmile%214.png" alt="logo">
    		</b-navbar-brand>
    	</ul>
    	<b-collapse is-nav id="nav_collapse">
    	<ul class="navbar-nav nav">
    		<li class="nav-item">
					<router-link :to="{'name':'invitado'}"><a class="nav-link">Invitado</a></router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{'name':'novio'}"><a class="nav-link">Crear Album</a></router-link>
				</li>
    	</ul>
    	<ul class="navbar-nav ml-auto nav">
				<li class="nav-item">
					<router-link :to="{'name':'login'}"><a class="nav-link">Login</a></router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{'name':'register'}"><a class="nav-link">Register</a></router-link>
				</li>
			</ul>
		</b-collapse>
		</b-navbar>

</template>

<style>
	template {
		padding: 10px 0;
		margin: 0;
		font-style: white;
	}
	.container-fluid{
		padding: 0;
	}
	#logo{
		width: 100px;
		height: auto;
		margin:0 50px;
	}
	.nav{
		margin:0 50px;

	}
	.navbar{
		background-color: #66CCBE !important;
	}
	a{
		color: white !important;
		font-weight: 700;
	}
	a:hover {
		color: #313333 !important;
		text-decoration-line: none;
	}
</style>