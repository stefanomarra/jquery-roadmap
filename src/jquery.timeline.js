// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variables rather than global
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	/**
	 * jQuery custom plugin implement the roadmap functionality
	 */
	$.fn.timeline = function(events, opts) {
		if ( !events instanceof Array ) {
			events = [];
		}
		var settings = $.extend({
			slide: 1,
			eventsPerSlide: 6,
			eventTemplate: '<li class="timeline__events__event">' +
								'<div class="event">' +
									'<div class="event__date">####DATE###</div>' +
									'<div class="event__content">####CONTENT###</div>' +
								'</div>' +
							'</li>',
			prevArrow: 'prev',
			nextArrow: 'next'
		}, opts);

		var buildEvent = function(event, key) {
			var html = settings.eventTemplate;
				html = html.replace('####DATE###', event.date);
				html = html.replace('####CONTENT###', event.content);

			var left = (100/(settings.eventsPerSlide-1))*key;

			return $(html).css('left', left + '%');
		}

		return this.each(function() {
			var _this = this;
			var $this = $(this);
			var currentSlide = settings.slide - 1;

			/**
			 * Store events and settings
			 */
			$this.data({
				events: events,
				settings: settings,
				currentSlide: currentSlide
			}).addClass('timeline');

			var clear = function() {
				$this.removeClass('timeline--initialized');

				$this.find('.timeline__events').remove();
				$this.find('.timeline__navigation').remove();
			}

			var buildEvents = function() {
				var currentSlide = $this.data('currentSlide');
				var settings = $this.data('settings');
				var events = $this.data('events');

				$('<ol/>', {class:'timeline__events'}).append(events.slice((currentSlide*settings.eventsPerSlide), ((currentSlide+1)*settings.eventsPerSlide)).map(buildEvent)).appendTo(_this);
			}

			var buildNavigation = function() {
				var currentSlide = $this.data('currentSlide');

				var buildNav = function(nav) {
					switch (nav) {
						case 'prev':
							if ( currentSlide > 0 ) {
								return $('<li><a href="#" class="' + nav + '">' + settings.prevArrow + '</a></li>');
							}
							break;

						case 'next':
							if ( (currentSlide+1)*settings.eventsPerSlide < events.length ) {
								return $('<li><a href="#" class="' + nav + '">' + settings.nextArrow + '</a></li>');
							}
							break;
					}

					return $('<li></li>');
				}

				$('<ul/>', {class:'timeline__navigation'}).append(['prev', 'next'].map(buildNav)).appendTo(_this);
			}

			var build = function() {

				clear();

				/**
				 * Init events
				 */
				buildEvents();

				/**
				 * Init navigation
				 */
				buildNavigation();

				/**
				 * Initialize
				 */
				setTimeout(function() {
					$this.addClass('timeline--initialized');
				}, 100);
			}

			/**
			 * Build timeline
			 */
			build();

			/**
			 * Event Listeners
			 */
			$('body').on('click', '.timeline .timeline__navigation li > *', function(e) {
				e.preventDefault();

				/**
				 * Handle prev click
				 */
				if ( $(this).hasClass('prev') ) {

					var currentSlide = $this.data('currentSlide');
					if ( currentSlide < 1 ) {
						return false;
					}

					$this.data({
						events: events,
						settings: settings,
						currentSlide: currentSlide-1
					});

					build();
				}

				/**
				 * Handle next click
				 */
				else {

					var currentSlide = $this.data('currentSlide');
					if ( (currentSlide+1)*settings.eventsPerSlide >= events.length ) {
						return false;
					}

					$this.data({
						events: events,
						settings: settings,
						currentSlide: currentSlide+1
					});

					build();
				}
			});
		});
	};

} )( jQuery, window, document );