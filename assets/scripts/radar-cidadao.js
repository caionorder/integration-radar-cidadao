var $recebe = $('#receiveRadarCidadao');
var $layout;
var $app = {};
var itens = [];

$app.loadJson = function(){
	
	if(itens.length > 1){
		itens = [];
	}

	$.getJSON("./api/json/info.json", function(){
		console.log('loaded');
	})
	.done(function(data){
		$.each( data, function( key, val ) {
			itens.push(val);
		});
		$app.process();
	});

}

$app.process = function(){
	if(itens.length > 1){
		for (var i = 0; i < itens.length; i++) {
			$app.println(itens[i]);
		};
	} else {
		$app.loadJson();
	}
	
}

$app.println = function(data){

	d = new Date(data['dataocorrencia']);
	mes = (d.getMonth() + 1);
	console.log(mes);
	if(mes >= 10){
		mes = mes;
	} else {
		mes = '0'+mes;
	}
	d = d.getDate()+'/'+mes+'/'+d.getFullYear();

	$layout =  	'<div class="boxnoticia border_r">'
					+'<a href="http://radarcidadao.com.br/cascavel/PR/detalhes/'+data['id']+'/" target="_blank">'
						+'<div class="notHome">'
							+'<h1>'+data['titulo']+'</h1>'
							+'<span>'+data['descricao']+'</span>'
							+'<small>'+d+'</small>'
						+'</div>'
					+'</a>'
				+'</div>';
	$recebe.append($layout);
}

$app.loadJson();