---
category: 4
layout: post
title: Buy keyword
---
<p>If no errors occurred, the response will be:</p>
<div class="highlight bg-success"><pre class="bg-success">
$ /buy/keyword/api.json?gateway=1919&keyword=test
{
	"status": "success",
	"success": "BUY_SUCCESFUL",
	"buy": {
		"price": 120,
		"buy": 100
	}
}
</pre></div>
<br>

<p>
	<strong>All call to 'buy/keyword' are final. You will receive an invoice if the price are greater than 0.00. You can check the price with the 'Check keyword'-endpoint.</strong>
</p>





<h3>
	<span class="label label-default">Required</span>
</h3>


<span class="text-primary">gateway</span><br>
<span class="m-l-2">The gateway, typically 1919, or your hosted SIM-card MSISDN.</span>

<span class="text-primary">keyword</span><br>
<span class="m-l-2">The keyword you want to lookup.</span>