var resimsirasi 	=	1;
var toplamresim 	=	10;

function resimdegistir(deger){
	var resim		=	document.getElementById("resim");
	resimsirasi		=	resimsirasi + deger;
	if(resimsirasi>toplamresim){
		resimsirasi		=	1;
	}
	if(resimsirasi<1){
		resimsirasi		=	toplamresim;
	}
	resim.src 	=	"slayt" + resimsirasi + ".jpg";
	clearInterval(zaman);
	zaman		=	window.setInterval(function calistir(){
		var resim		=	document.getElementById("resim");
		resimsirasi		=	resimsirasi + 1;
			if(resimsirasi>toplamresim){
				resimsirasi		=	1;
			}
			if(resimsirasi<1){
				resimsirasi		=	toplamresim;
			}
		resim.src 	=	"slayt" + resimsirasi + ".jpg";
	}, 3000);
}

var zaman		=	window.setInterval(function calistir(){
var resim		=	document.getElementById("resim");
resimsirasi		=	resimsirasi + 1;
	if(resimsirasi>toplamresim){
		resimsirasi		=	1;
	}
	if(resimsirasi<1){
		resimsirasi		=	toplamresim;
	}
	resim.src 	=	"slayt" + resimsirasi + ".jpg";
}, 3000);

