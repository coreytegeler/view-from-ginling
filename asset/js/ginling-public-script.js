$(function() {
	var $body, $fixedNav, $mainHeader, $sideNav, $sideNavParent, $topNav, handleNavs;
	window.iframes = [];
	$body = $('body');
	$mainHeader = $('header.main');
	$topNav = $('nav.top');
	$fixedNav = $('nav.fixed');
	$sideNav = $('nav.side');
	$sideNavParent = $sideNav.parent();
	$('.blocks iframe:not(.adjusted)').each(function(i, iframe) {
		var $iframe, $placeholder;
		$iframe = $(iframe).addClass('full');
		$placeholder = $('<div></div>').addClass('placeholder').css({
			height: $iframe.innerHeight()
		});
		$iframe.after($placeholder);
		window.iframes[i] = $iframe;
	});

	handleNavs = function() {
		var mainHeaderHeight = $mainHeader.outerHeight(),
				mainHeaderTop = $mainHeader.offset().top,
				mainHeaderBottom = mainHeaderTop + mainHeaderHeight,
				fixedNavHeight = $fixedNav.outerHeight(),
				scrollTop = $(window).scrollTop();
		if(scrollTop >= mainHeaderBottom - fixedNavHeight) {
			$body.addClass('fix-nav');
			if ($sideNav.length) {
				var sideNavHeight = $sideNav.innerHeight(),
						sideNavWidth = $sideNavParent.innerWidth(),
						sideNavLeft = $sideNavParent.offset().left;
				$sideNav.css({
					width: sideNavWidth,
					left: sideNavLeft,
					top: fixedNavHeight
				});
				$sideNavParent.css({
					height: sideNavHeight
				});
			}
		} else {
			$body.removeClass('fix-nav');
			if ($sideNav.length) {
				$sideNav.attr('style', '');
				$sideNavParent.attr('style', '');
			}
		}
	};

	$(window).on('scroll', handleNavs);
	$(window).on('resize', handleNavs);
	handleNavs();
});
