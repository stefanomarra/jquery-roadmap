# jQuery Roadmap

Another timeline jquery plugin. This plugin was custom made for another project and then separated.

## Install

 - **NPM:** `npm install jquery-roadmap`
 - **CDN:** [jsdelivr.com](https://www.jsdelivr.com/package/npm/jquery-roadmap)
```html
<script src="https://cdn.jsdelivr.net/npm/jquery-roadmap@1.2.0/src/jquery.roadmap.min.js"></script>
```
 - **Download:** [zip](https://github.com/stefanomarra/jquery-roadmap/archive/master.zip)

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.roadmap.min.js"></script>
	```



3. Call the plugin:

	```javascript
	$("#my-roadmap").roadmap(data, options);
	```

## Parameters

### Data ###

First parameter is an array of objects with the following structure:

```js
var data = [
	{
		date: 'Q1 - 2018',
		content: 'Lorem ipsum dolor sit amet'
	},
	{
		date: 'Q2 - 2018',
		content: 'Lorem ipsum dolor sit amet'
	},
	{
		date: 'Q3 - 2018',
		content: 'Lorem ipsum dolor sit amet'
	},
	{
		date: 'Q4 - 2018',
		content: 'Lorem ipsum dolor sit amet'
	}
];
```

### Options ###

Second parameter is an object of properties used to customize the timeline. Here's a list of all properties and it's default values:

```js
$("#my-roadmap").roadmap(data, {
	eventsPerSlide: 6,
	slide: 1,
	rootClass: 'roadmap',
	prevArrow: 'prev',
	nextArrow: 'next',
	orientation: 'auto',
	eventTemplate: '<div class="event">' +
			'<div class="event__date">####DATE###</div>' +
			'<div class="event__content">####CONTENT###</div>' +
		'</div>'
});
```

#### eventsPerSlide ####

>Sets the number of events per slide.

>*Default value:* 6

#### slide ####

>Sets the slide to show after initialization.

>*Default value:* 1

#### rootClass ####

>Allows you to change the css root class.

>*Default value:* roadmap

#### prevArrow ####

>Allows you to customize the "Previous" arrow. HTML is allowed.

>*Default value:* prev

#### nextArrow ####

>Allows you to customize the "Next" arrow. HTML is allowed.

>*Default value:* next

#### orientation ####

>Allows you to force the timeline orientation only to horizontal or vertical. Possible values are: `horizontal`, `vertical` and `auto`.

>*Default value:* auto

#### eventTemplate ####

>Allows you to customize the event template. Use `####DATE###` and `####CONTENT###` as tokens to show the events date and content.

## Contributing

Check [CONTRIBUTING.md](https://github.com/stefanomarra/jquery-roadmap/blob/master/CONTRIBUTING.md) for more information.

## License

[MIT License](https://github.com/stefanomarra/jquery-roadmap/blob/master/LICENSE) © Stefano Marra