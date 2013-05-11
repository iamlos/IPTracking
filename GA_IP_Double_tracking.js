
<script src="//googledrive.com/host/0B6qaP09JZd-GU3F4dVZtczFDUU0/easyjquery.js">
<script type="text/javascript" language="Javascript">
function my_callback2(json) {
_gaq.push(['_trackEvent', 'IP', "IP: " + json.IP + " REMOTE IP: " + json.REMOTE_ADDR, "Country: " + json.CountryName + " City: " + json.CityName]);
_gaq.push(['_trackEvent', 'Time', "City:" + json.CityName + " IP: " + json.IP, " Visited Time:" + timeStamp2]);
}
EasyjQuery_Get_IP("my_callback2","full");
</script>

//secound methord

<script>
 function getip(json){
_gaq.push(['_trackEvent', 'IP', 'IP Methord 2', json.ip]);
}
</script>
<script src="//jsonip.com/?callback=getip">
