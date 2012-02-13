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
				'menu1': 'Voce menu 1',
				'menu2': 'Voce menu 2',
				'menu3': 'Voce menu 3'
			},
			events : {
				'click: li' : function (_, $el) {
					var c = 0;

					$.each($el, function (_, val) {
						var d = $(this);
						setTimeout(function () {
							d.fadeIn();
						}, 200 + c);
						c += 350;
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
			var namedParam    = /^([\w\s]+):([\w\s]+)$/i;

			
			this.init();
			this.render();
			
			for (i in this.events) {
				var ev = namedParam.exec(i);
				
				this.events[i].call(this, i, $(ev[2]));
			}

		},
		init: function () {
			var nav = $('<nav></nav>'),
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

}(window, jQuery, undefined))