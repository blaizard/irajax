## A super-small ajax script

Simple to use ajax library

&#128279; [https://blaizard.github.io/irajax](https://blaizard.github.io/irajax)

## Features

* Small-size
* Simple to use
* Support JSON format

## Getting Started

To make an GET ajax call:
```javascript
irAjax("www.google.com").success(function(data) {
	alert(data);
});
```

To make an POST or other ajax call:
```javascript
irAjax("POST", "www.google.com").success(function(data) {
	alert(data);
});
```

Failures can be catched by adding an error callback
```javascript
irAjax("www.google.com").success(function(data) {
	alert(data);
}).error(function() {
	alert("Cannot fetch the page");
});
```

Similarly, completion event are catched by adding a complete callback
```javascript
irAjax("www.google.com").complete(function() {
	alert("I will be called no matter what!");
});
```

Remote json object can be directly fetched as followed:
```javascript
irAjaxJson("info.json").success(function(data) {
	alert(data.text);
});
```
