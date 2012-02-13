(function (window, $, undefined) {
	var HomePage = function (pageTitle) {
		this.pageTitle = pageTitle;
		new pHeader();
		this.bindEvents();
	};

	HomePage.prototype = {
		bindEvents : function () {
			console.log(this.pageTitle);
		}
	};

	var pHeader = function (attributes, options) {
		var defaults;
		
		this.h = $('body').find('header');

		this.nav = new pNav({
			title : 'Menu',
			parent : this.h,
			mId : 'mainNav',
			section : {
				'home': 'Home',
				'menu1': 'Voce menu 1',
				'menu2': 'Voce menu 2',
				'menu3': 'Voce menu 3'
			},
			events : {
				'click: a' : function (_, $el) {
					var c = 0;

					$.each($el, function (_, val) {
						var d = $(this);
		                setTimeout(function () {
		                    d.css('left', 0)
		                }, 200 + c);
		                c += 350;
					});
				}
			}
		});

		//this.bindEvents();
	};

	pHeader.prototype = {
		/*bindEvents : function () {
			this.init();
			this.render();
		},
		init: function () {
			
		},
		render : function () {
			this.h.append(this.nav.html);
		}*/
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
				html = '<ul id="' + this.mId + '" class="menu">';
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

	new HomePage('Home page');
}(window, jQuery, undefined))