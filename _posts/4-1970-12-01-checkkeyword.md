---
category: 4
permalink: :slug
layout: post
title: Check keyword
---
<p>If no errors occurred, the response will be:</p>
<div class="highlight bg-success"><pre class="bg-success">
$ /buy/checkkeyword/api.json?gateway=1919&keyword=pacman
{
	"status": "success",
	"success": "KEYWORD_AVAILABLE",
	"buy": {
		"gateway": {
			"controlgateway": 1,
			"controluser": 1,
			"gateway": 1919,
			"local": false
		},
		"keyword": {
			"keyword": "pacman",
			"price": 120
		},
		"period": {
			"start": 1397512800,
			"end": 1400104800,
			"price": 120
		}
	}
}
</pre></div>
<br />





<p>Should an error occurr, you can typically find the reason in 'error':</p>
<div class="highlight bg-danger"><pre class="bg-danger">
{
	"status": "error",
	"error": "KEYWORD_EXISTS"
}
</pre></div>
<br />





<h3>
	<span class="label label-default">Required</span>
</h3>


<span class="text-primary">gateway</span><br />
<span class="m-l-2">The gateway, typically 1919, or your hosted SIM-card MSISDN.</span>

<span class="text-primary">keyword</span><br />
<span class="m-l-2">The keyword you want to lookup.</span>