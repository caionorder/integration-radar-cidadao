<?php
$url = 'http://radarcidadao.com.br/?pg=listaocorrencias2&tmpl=component&cidade=1&tipo=10';
$content = file_get_contents($url);
$save = file_put_contents('./json/info.json',$content);