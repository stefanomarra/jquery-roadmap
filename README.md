# jQuery Timeline

Another timeline jquery plugin. This plugin was custom made for another project.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.timeline.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#my-timeline").timeline(data, options);
	```

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
$("#my-timeline").timeline(data, {
	eventsPerSlide: 6,
	slide: 1,
	prevArrow: 'prev',
	nextArrow: 'next',
	eventTemplate: '<li class="timeline__events__event">' +
		'<div class="event">' +
			'<div class="event__date">####DATE###</div>' +
			'<div class="event__content">####CONTENT###</div>' +
		'</div>' +
	'</li>'
});
```

#### eventsPerSlide ####

>Sets the number of events per slide.

>*Default value:* 6

#### slide ####

>Sets the slide to show after initialization.

>*Default value:* 1

#### prevArrow ####

>Allows you to customize the "Previous" arrow. HTML is allowed.

>*Default value:* prev

#### nextArrow ####

>Allows you to customize the "Next" arrow. HTML is allowed.

>*Default value:* next

#### eventTemplate ####

>Allows you to customize the event template. Use `####DATE###` and `####CONTENT###` as tokens to show the events date and content.

## Contributing

Check [CONTRIBUTING.md](https://github.com/stefanomarra/jquery-timeline/blob/master/CONTRIBUTING.md) for more information.

## License

[MIT License](https://github.com/stefanomarra/jquery-timeline/blob/master/LICENSE) © Stefano Marra