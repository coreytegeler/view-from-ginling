$ ->
	window.iframes = []

	$topNav = $('nav.top')
	$fixedNav = $('nav.fixed')

	$('.blocks iframe:not(.adjusted)').each (i, iframe) ->
		$iframe = $(iframe).addClass('full')
		# $iframe.prepend($('</div></div><div class="col col-12"><div class="blocks">'))
		$placeholder = $('<div></div>')
			.addClass('placeholder')
			.css
				height: $iframe.innerHeight()
		$iframe.after($placeholder)
		window.iframes[i] = $iframe



	$(window).on 'scroll', (e) ->
		topNavHeight = $topNav.innerHeight()
		topNavTop = $topNav.offset().top
		topNavBottom = topNavTop+topNavHeight
		scrollTop = $(window).scrollTop()
		if scrollTop >= topNavBottom
			$fixedNav.addClass('show')
		else
			$fixedNav.removeClass('show')

	