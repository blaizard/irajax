## A super-small ajax script

Simple ajax library

&#128279; [https://blaizard.github.io/irajax](https://blaizard.github.io/irajax)

## Features

* Small-size
* Simple to use
* Supports JSON format
* Supports headers and basic authentication

## Getting Started

To make an GET ajax call:
```javascript
irAjax("www.google.com").success(function(data) {
	alert(data);
});
```

To make an POST or other ajax call:
```javascript
irAjax("POST", "www.google.com").then(function(data) {
	alert(data);
});
```

Failures can be catched with the catch method
```javascript
irAjax("www.google.com").then(function(data) {
	alert(data);
}).catch(function() {
	alert("Cannot fetch the page");
});
```

Similarly, completion event are catched by using the finally method
```javascript
irAjax("www.google.com").finally(function() {
	alert("I will be called no matter what!");
});
```

Remote json object can be directly fetched as followed:
```javascript
irAjaxJson("info.json").then(function(data) {
	alert(data.text);
});
```
