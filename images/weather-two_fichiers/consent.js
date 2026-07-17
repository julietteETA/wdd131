let amutils = {
	policy: 2026043001,
	url: "https://www.amcharts.com/privacy-policy/",
	callbacks: []
};

//localStorage.clear();

// fallback with cookies for browsers that do not support localStorage
if (!localStorage) {
	//document.cookie = "amcharts-utils-consent=" + amutils.policy + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
	localStorage = {
		getItem: function (key) {
			let name = key + "=";
			let decodedCookie = decodeURIComponent(document.cookie);
			let ca = decodedCookie.split(';');
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) === 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		},
		setItem: function (key, value) {
			document.cookie = key + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
		}
	};
}

amutils.consented = function () {
	let consent = localStorage.getItem("amcharts-utils-consent");
	return consent && parseInt(consent) === amutils.policy;
}

amutils.showConsent = function () {
	let div = document.createElement("div");
	div.id = "amcharts-utils-consent";
	div.style.position = "fixed";
	div.style.bottom = "0";
	div.style.left = "0";
	div.style.maxWidth = "600px";
	div.style.margin = "1em";
	div.style.padding = "1em";
	div.style.backgroundColor = "#f0f0f0";
	div.style.borderRadius = "0.3em";
	div.style.border = "1px solid #fff";
	div.style.zIndex = "9999";

	// icon
	let icon = document.createElement("img");
	icon.src = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI1NnYyNTZIMHoiPjwvcGF0aD48cGF0aCBkPSJtMjIwLjIgMTA0LTIwLTM0LjdhMjguMSAyOC4xIDAgMCAwLTQ3LjMtMS45bC0xNy4zLTMwYTI4LjEgMjguMSAwIDAgMC0zOC4zLTEwLjMgMjkuNCAyOS40IDAgMCAwLTkuOSA5LjYgMjcuOSAyNy45IDAgMCAwLTExLjUtNi4yIDI3LjEgMjcuMSAwIDAgMC0yMS4yIDIuOCAyNy45IDI3LjkgMCAwIDAtMTAuMyAzOC4ybDMuNCA1LjhBMjguNSAyOC41IDAgMCAwIDM2IDgxYTI4LjEgMjguMSAwIDAgMC0xMC4yIDM4LjJsNDIgNzIuOGE4OCA4OCAwIDEgMCAxNTIuNC04OFptLTYuNyA2Mi42YTcxLjIgNzEuMiAwIDAgMS0zMy41IDQzLjdBNzIuMSA3Mi4xIDAgMCAxIDgxLjYgMTg0bC00Mi03Mi44YTEyIDEyIDAgMCAxIDIwLjgtMTJsMjIgMzguMWE4IDggMCAxIDAgMTMuOS04bC0yMi0zOC4xLTE2LTI3LjdhMTIgMTIgMCAwIDEtMS4yLTkuMSAxMS44IDExLjggMCAwIDEgNS42LTcuMyAxMiAxMiAwIDAgMSA5LjEtMS4yIDEyLjUgMTIuNSAwIDAgMSA3LjMgNS42TDg3IDY1LjRoLjFsMjYgNDVhNy43IDcuNyAwIDAgMCA2LjkgNCA3LjMgNy4zIDAgMCAwIDQtMS4xIDggOCAwIDAgMCAyLjktMTAuOWwtMjYtNDVhMTIgMTIgMCAxIDEgMjAuOC0xMmwzMCA1MS45IDYuMyAxMWE0OC4xIDQ4LjEgMCAwIDAtMTAuOSA2MSA4IDggMCAwIDAgMTMuOC04IDMyIDMyIDAgMCAxIDExLjctNDMuNyA4LjEgOC4xIDAgMCAwIDMuOC00LjkgOC40IDguNCAwIDAgMC0uOC02bC0xMC0xNy40YTEyIDEyIDAgMCAxIDEzLjUtMTcuNSAxMS44IDExLjggMCAwIDEgNy4yIDUuNWwyMCAzNC43YTcwLjkgNzAuOSAwIDAgMSA3LjIgNTQuNlptLTEyNS44IDc4YTguMiA4LjIgMCAwIDEtNi42IDMuNCA4LjYgOC42IDAgMCAxLTQuNi0xLjRBMTE3LjkgMTE3LjkgMCAwIDEgNDEuMSAyMDhhOCA4IDAgMSAxIDEzLjgtOCAxMDIuNiAxMDIuNiAwIDAgMCAzMC44IDMzLjQgOC4xIDguMSAwIDAgMSAyIDExLjJaTTE2OCAzMWE4IDggMCAwIDEgOC04IDYwLjIgNjAuMiAwIDAgMSA1MiAzMCA3LjkgNy45IDAgMCAxLTMgMTAuOSA3LjEgNy4xIDAgMCAxLTQgMS4xIDggOCAwIDAgMS02LjktNEE0NCA0NCAwIDAgMCAxNzYgMzlhOCA4IDAgMCAxLTgtOFoiIGZpbGw9IiM0YTRhNGEiIGNsYXNzPSJmaWxsLTAwMDAwMCI+PC9wYXRoPjwvc3ZnPg==";
	icon.style.float = "left";
	icon.style.marginRight = "1em"
	icon.style.maxWidth = "4em";
	div.appendChild(icon);

	// message
	let msg = document.createElement("div");
	msg.innerHTML = '<div><strong>Attention, please!</strong></div><div style="margin: 4px 0;">We use cookies for essential website functionality, analytics, and ad performance measurement as per our <a href="' + amutils.url + '" target="_blank">Privacy Policy</a>.</div>';
	msg.style.marginLeft = "5em";
	msg.style.color = "#444";
	div.appendChild(msg);

	// agree button
	let ok = document.createElement("button");
	ok.innerHTML = "I understand and agree";
	ok.style.padding = "4px 10px";
	ok.style.backgroundColor = "#3cabff";
	ok.style.color = "#fff";
	//ok.style.borderColor = "#5249a9";
	ok.style.fontWeight = "400";
	ok.style.borderRadius = "4px";
	ok.style.border = "none";
	ok.style.cursor = "pointer";
	ok.onclick = amutils.consent;
	msg.appendChild(ok);

	// add to page
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", function () { document.body.appendChild(div); });
	} else {
		document.body.appendChild(div);
	}
}

amutils.consent = function () {
	localStorage.setItem("amcharts-utils-consent", amutils.policy);
	document.getElementById("amcharts-utils-consent").remove();
	for (let i = 0; i < amutils.callbacks.length; i++) {
		amutils.callbacks[i]();
	}
}

amutils.registerConsent = function (callback) {
	if (amutils.consented()) {
		callback();
		return;
	}
	amutils.callbacks.push(callback);
}

if (!amutils.consented()) {
	amutils.showConsent();
}
