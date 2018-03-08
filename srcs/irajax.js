function irAjax(a, b, c)
{
	if (!b) {
		b = a;
		a = "GET";
	}

	var conf = Object.assign({
		headers: {},
		auth: [null, null],
		data: undefined
	}, c);

	return new Promise(function (resolve, reject) {
		var xhr;
		if (XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}
		// If not available look for one that is available
		else {
			["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", 
					"MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"].some(function(version) {
				try {
					xhr = new ActiveXObject(version);
					return false;
				}
				catch(e) {
				}
				return true;
			});
		}

		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				if (xhr.status == 200 || (xhr.status == 0 && xhr.responseText)) {
					resolve(xhr.responseText);
				}
				else {
					reject(new Error('Unable to load "' + b + '"'));
				}
			}
		}

		xhr.open(a, b, true, conf.auth[0], conf.auth[1]);
		for (var key in conf.headers) {
			xhr.setRequestHeader(key, conf.headers[key]);
		}
		xhr.send(conf.data);
	});
}

function irAjaxJson(a, b, c)
{
	return new Promise(function (resolve, reject) {
		var conf = (!c && b.data) ? b : ((c && c.data) ? c : 0);
		if (conf) {
			conf.data = JSON.stringify(conf.data);
			conf.headers || (conf.headers = {});
			conf.headers["Content-Type"] = "application/json";
		}
		irAjax(a, b, c).then(function(data) {
			resolve(JSON.parse(data));
		});
	});
}
