angular
	.module("app", [
		"ngRoute",
		"ngAria",
		"ngAnimate",
		"ngMaterial",
		"ngMessages",
		"angular-loading-bar",
		"buzzflow.automation"
	])
	.config(
		[
			"$mdThemingProvider",
			function($mdThemingProvider) {
				"use strict";
				$mdThemingProvider.theme("default").primaryPalette("blue");
				$mdThemingProvider.enableBrowserColor({
					theme: 'default', // Default is 'default'
					palette: 'primary', // Default is 'primary', any basic material palette and extended palettes are available
					hue: '800' // Default is '800'
				  });
			}
		],
		[
			"cfpLoadingBarProvider",
			function(cfpLoadingBarProvider) {
				cfpLoadingBarProvider.includeBar = true;
			}
		]
	);
