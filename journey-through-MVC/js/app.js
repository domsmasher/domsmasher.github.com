(function (window, $, undefined) {

	document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, ' js');

	/* My Application */
	var OnePageApp = function (pageTitle) {
		this.pageTitle = pageTitle;
		new pHeader();
	};

	/* The Header Object */
	var pHeader = function (attributes, options) {
		
		var defaults;
		
		/* First Header Tag in the document */
		this.h = $('body').find('header').eq(0);

		this.nav = new pNav({
			title : 'Menu',
			parent : this.h.find('.container'),
			mId : 'mainNav',
			classes : {},
			section : {
				'home': 'Home',
				'ch-01': 'Chapter 01  - Layout',
				'ch-02': 'Voce menu 2',
				'ch-03': 'Voce menu 3'
			},
			events : {
				'li' : function (_, $el) {
					var c = 0;

					$.each($el, function (_, val) {
						var d = $(this);
						setTimeout(function () {
							d.fadeIn();
						}, 200 + c);
						c += 350;
					});
				},
				'#mainNav a' : function (_, $el) {
					$el.on('click', function () {
						var element = $(this),
							section = $(element.attr('href'));

						element
							.closest('nav')
							.find('.active')
							.removeClass('active')
							.end()
							.end()
							.addClass('active');


						console.log(section.offset().top);
						$('html, body').animate({
							scrollTop : section.offset().top - 60
						}, 2000);
						return false;
					});
				}

			}
		});
	};
	var pNav = function (attributes, options) {
		var defaults;

		attributes || (attributes = {});
		this.title = attributes.title || '';
		this.section = attributes.section || {};
		this.events = attributes.events || {};
		this.parent = attributes.parent || $('body');
		this.mId = attributes.mId || '';
		this.html = '';
		this.bindEvents();
	};

	pNav.prototype = {
		bindEvents : function () {
			
			this.init();
			this.render();
			
			if (!this.events) {
				return;
			}

			for (i in this.events) {
				var els = $(i) || [];
				this.events[i].call(this, i, els);
			}

		},
		init: function () {
			var nav = $('<nav class="nav-collapse collapse"></nav>'),
				html = '<ul id="' + this.mId + '" class="nav">';
			$.each(this.section, function (_, label) {
				html += '<li><a href="#' + _ + '">' + label + '</a></li>';
			});
			html += '</ul>';
			nav.append(html);
			this.html = nav;
		},
		render : function () {
			this.parent.append(this.html);
		}
	};

	new OnePageApp('Home page');

}(window, jQuery, undefined));

$(document).ready(function () {
	$('section').css('min-height', $(window).height() + 'px');
});