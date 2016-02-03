# Integration Radar Cidadão
Hello, to facilitate their integration to the portal.

## Install
* Add folders in your site folder;
* Configure your crontab: `30 * * * * curl http://www.yoursite.com/api/getjson.php > radar.log`.

## How to use
* Insert in your body this code:

```markup
<div class="yourFeedClass">
	<h2>Radar Cidadão - Dengue</h2>
	<div id="receiveRadarCidadao"></div>
</div>
<script src="yoururl.com/js/radar-cidadao.js" type="text/javascript" charset="utf-8"></script>
```
