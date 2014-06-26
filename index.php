<?php

$header_title = "Turing Test Stock Target Synthesizer";
$header_js = 'index.js';
require_once($_SERVER['DOCUMENT_ROOT']."/header.php");

echo '<center>';

echo <<<SYMBOLINPUT
<form>
<input type="text" id="symbol_input">
<br><label for="symbol_input" style="size: small">Enter Stock Symbol</label>
</form>
SYMBOLINPUT;

echo '<img src="/images/crystal.gif" id="crystal_ball" style="width: 100px; height: 100px; display: none;">';
echo '<div id="response"></div>';

echo <<<DISCLAIMER
<div id="disclaimer" title="Terms of Service" style="width:300px;">
<p>
The Turing Test Stock Target Picker is a work in progress. Stochastic model can fluctuate wildly depending on random seed and all predictions are given with absolutely no guarantee of accuracy.  
For more information, contact the author at <a href="https://github.com/ptraverse/turget">https://github.com/ptraverse/turget</a>.
<br><br>
<center>
Note: This site uses cookies and will log your IP address.
<br><br>
<span style="font-size:xx-small">Powered by the Yahoo! <a href="https://developer.yahoo.com/yql/console/?q=show%20tables&env=store://datatables.org/alltableswithkeys">YQL API.</a></span>
</center> 
</p>
</div>
DISCLAIMER;

echo '</center>';
echo <<<END
</body>
</html>
END;

?>