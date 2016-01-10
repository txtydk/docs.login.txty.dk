---
category: 4
permalink: :title
layout: post
title: Your prices & consumption
---
<p>You can in one request get your prices for specific countries, balance and subscriptions.</p>
<div class="highlight bg-success"><pre class="bg-success">
$ /view/yourprices/api.json
{
	"status": "success",
	"success": "VIEW_YOURPRICES",
	"yourprices": {
		"prices": [
			{
				"country": "Denmark",
				"dialcode": 45,
				"price": {
					"sms": 0.2,
					"hlr": 0.08
				}
			},
			{
				"country": "Norway",
				"dialcode": 47,
				"price": {
					"sms": 0.2,
					"hlr": 0.08
				}
			},
			{
				"country": "Sweden",
				"dialcode": 46,
				"price": {
					"sms": 0.2,
					"hlr": 0.08
				}
			},
			{
				"country": "United Kingdom",
				"dialcode": 44,
				"price": {
					"sms": 0.55,
					"hlr": 0.08
				}
			},
			...
			{
				"country": "Other countries",
				"dialcode": 0,
				"price": {
					"sms": 0.6,
					"hlr": 0.08
				}
			}
		],
		"credit": {
			"balance": 95.96,
			"timestamp": 1394399372
		},
		"subscription": {
			"keywords": [
				{
					"gateway": 1919,
					"keyword": "keyword",
					"price": 120,
					"shutdown": 0,
					"paiduntil": 0
				},
				...
			]
		}
	}
}
</pre></div>