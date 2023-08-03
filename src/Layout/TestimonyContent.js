import * as React from "react";


export default function TestimonyContent(){
	return(

       <section id="recommandations">
	        <div className="container">
	            <div className="red-divider"></div>
	            <div className="heading">
	                <h2>Témoignages</h2>
	            </div>
	            <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
	                <ol className="carousel-indicators">
	                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
	                    <li data-target="#myCarousel" data-slide-to="1"></li>
	                    <li data-target="#myCarousel" data-slide-to="2"></li>
	                </ol>
	                <div className="carousel-inner" role="listbox">
	                    <div className="item active">
	                        <h3>"John t'es le meilleur! Merci pour tout..."</h3>
	                        <h4>Larry Page, Google Co-Founder</h4>
	                    </div>
	                    <div className="item">
	                        <h3>"L'esprit le plus créatif que j'ai vu de toute ma vie..."</h3>
	                        <h4>Jack Dorsey, Twitter Founder and CEO</h4>
	                    </div>
	                    <div className="item">
	                        <h3>"Merci John de m'avoir appris à coder... Tout ça c'est grâce à toi!"</h3>
	                        <h4>Mark Zuckerberg, Facebook Founder and CEO</h4>
	                    </div>
	                </div>
	                <a className="left carousel-control" href="#myCarousel" data-slide="prev" role="button">
	                    <span className="glyphicon glyphicon-chevron-left"></span>
	                </a>
	                <a className="right carousel-control" href="#myCarousel" data-slide="next" role="button">
	                    <span className="glyphicon glyphicon-chevron-right"></span>
	                </a>

	            </div>

	        </div>


	    </section>
	)
}