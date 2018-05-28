<template>
	<b-navbar class="footer1 fixed-bottom">	    
	  <div class="footer-bottom">
	    <div class="container">
        <div class="pull-left"> Copyright © <a href="https://www.linkedin.com/in/frangomeznavas/">Fran Gómez</a>.  All right reserved.</div>
        <div class="pull-right">
          <ul>
            <li>
	          	<a class="nav-link active" href="https://www.linkedin.com/in/frangomeznavas/" target="_blank">
								<i class="fab fa-lg fa-linkedin"></i>
							</a>
							</li>
							<li>
	          	<a class="nav-link active" href="https://github.com/franGomezNavas" target="_blank">
								<i class="fab fa-lg fa-github"></i>
								</a>
							</li>
							<li>
	          	<a class="nav-link active" href="https://www.facebook.com/fjgomeznavas" target="_blank">
								<i class="fab fa-lg fa-facebook-square"></i>
								</a>
							</li>
							<li>
	          	<a class="nav-link active" href="https://www.behance.net/frangomeznavas" target="_blank">
								<i class="fab fa-lg fa-behance"></i>
								</a>
							</li>
							<li>
	          	<a class="nav-link active" href="https://www.instagram.com/frannavas_/" target="_blank">
								<i class="fab fa-lg fa-instagram"></i>
								</a>
							</li>
          </ul> 
        </div>
	    </div>
	  </div> <!--/.footer-bottom--> 
	</b-navbar>
</template>

<style>
	@import url(https://fonts.googleapis.com/css?family=Alegreya+Sans:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,800,800italic,900,900italic);
	@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);

	ul, ol {
	    padding: 0;
	    margin: 0;
	}

	li {
	    list-style: none;    
	}

	.btn, .form-control {
	    border-radius: 2px;
	    box-shadow: none !important;
	}

	/*FOOTER 1*/
	.footer1 a {
	    color: #DDD;
	}

	.footer1 a:hover,
	.footer1 a:focus,
	.footer1 a:active {
	    color: #FFF;
	}

	.footer1 .footer {
	    background-color: #66CCBE;
	    padding: 15px 0;
	    margin-top: 5em;
	}

	.footer1 .footer .footer-desc p {
	    color: #DDD;
		margin: 10px 0 8px;
	}

	.footer1 .footer .social {
	    margin: 0 auto;
	    display: table;
	}

	.footer1 .footer .social li {
	    float: left;
	}

	.footer1 .footer .social li a {
		display: block;
	    font-size: 1em;
	    color: #DDD;
	    width: 30px;
	    height: 30px;
	    line-height: 32px;
	    text-align: center;
	    background-color: #222728;
	    border-radius: 2px;
	    margin: 15px 4px
	}

	.footer1 .footer .social li a:hover {
	    background-color: #3A4144;
	}

	.footer1 .footer .input-group {
	    margin: 15px 0;
	}

	.footer1 .footer .form-control {
	    border-radius: 2px 0 0 2px;
	    background-color: #585C5D;
	    border-color: #585C5D;
	    color: #DDD;
	    font-size: 15px;
	}

	.footer1 .footer .form-control:hover,
	.footer1 .footer .form-control:focus {
	    border: 1px solid #222728;
	    background-color: #222728;
	}

	.footer1 .footer .input-group-addon {
	    border-radius: 0 2px 2px 0;
	    background-color: #F7931D;
	    color: #FFF;
	    border-color: #F7931D;
	    font-size: 15px;
	}

	.footer1 .footer-bottom {
	    background-color: #66CCBE;
	    padding: 2px 0;
	    color: #f5f5f5;
	    font-size: 13px;
	}

	.footer1 .footer-bottom ul li {
	    display: inline-block;
	}

	.footer1 .footer-bottom ul li a {
	    display: block;
	    padding-left: 8px;
	}

	/*.footer1 .footer-bottom ul li a:after {
	    padding-left: 6px;
	}*/

	.footer1 .footer-bottom ul li:last-child a:after {
	    content: "";
	}

	@media (max-width: 550px) {
		.footer1 .footer-bottom .pull-left,
		.footer1 .footer-bottom .pull-right {
			float: none !important;
			width: 100%;
			padding: 8px;
			text-align: center;
		}
	}
	
</style>