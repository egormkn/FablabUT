(function ideaToggle(ideaText, ideaButton){
	if (!ideaText || !ideaButton) {
		return false;
	}
	ideaButton.onclick = function () {
		if (ideaText.classList.contains('idea-text-visible')) {
			ideaText.classList.remove('idea-text-visible');
			ideaButton.innerHTML = ideaButton.getAttribute("data-text-show");
		} else if (!ideaText.classList.contains('idea-text-visible')) {
			ideaText.classList.add('idea-text-visible');
			ideaButton.innerHTML = ideaButton.getAttribute("data-text-hide");
		}
		return false;
	};
})(document.getElementById('idea-text'), document.getElementById('idea-button'));


(function placeholder(){
	function bindActions(wrapper, tag) {
		wrapper.getElementsByClassName(tag + '-placeholder')[0].style.position = 'absolute';
		var field = wrapper.getElementsByTagName(tag)[0];
		if (!wrapper.classList.contains(tag + '-blur')){
			wrapper.classList.add(tag + '-blur');
		}
		if (field.value == "" && !wrapper.classList.contains(tag + '-empty')){
			wrapper.classList.add(tag + '-empty');
		}
		field.onblur = function() {
			if (!wrapper.classList.contains(tag + '-blur')){
				wrapper.classList.add(tag + '-blur');
			}
			if (wrapper.classList.contains(tag + '-focus')){
				wrapper.classList.remove(tag + '-focus');
			}
			if (field.value == "" && !wrapper.classList.contains(tag + '-empty')){
				wrapper.classList.add(tag + '-empty');
			}
			if (field.value != "" && wrapper.classList.contains(tag + '-empty')){
				wrapper.classList.remove(tag + '-empty');
			}
		};
		
		field.onkeyup = function() {
			if (field.value == "" && !wrapper.classList.contains(tag + '-empty')){
				wrapper.classList.add(tag + '-empty');
			}
			if (field.value != "" && wrapper.classList.contains(tag + '-empty')){
				wrapper.classList.remove(tag + '-empty');
			}
		};

		field.onfocus = function() {
			if (wrapper.classList.contains(tag + '-blur')){
				wrapper.classList.remove(tag + '-blur');
			}
			if (!wrapper.classList.contains(tag + '-focus')){
				wrapper.classList.add(tag + '-focus');
			}
			if (field.value == "" && !wrapper.classList.contains(tag + '-empty')){
				wrapper.classList.add(tag + '-empty');
			}
			if (field.value != "" && wrapper.classList.contains(tag + '-empty')){
				wrapper.classList.remove(tag + '-empty');
			}
		};
	}
	
	['input', 'textarea'].forEach(function(tag) {
		var wrappers = document.getElementsByClassName(tag + '-wrapper');
		for (var i = 0; i < wrappers.length; i++) {
			bindActions(wrappers[i], tag);
		}
	});
})();

(function headerFix(header) {
	if (!header) {
		return false;
	}
    var timeout;
	function fixHeader() {
		if (document.documentElement.clientWidth < 630) {
			if (header.classList.contains('header-fixed')) {
				header.classList.remove('header-fixed');
			}
			return false;
		}
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var logo = document.getElementById('logo');
		if (header.classList.contains('header-fixed') && scrolled < 148) {
			header.classList.remove('header-fixed');
			logo.src = logo.getAttribute("data-src-big");
		    clearTimeout(timeout);
		} else if (!header.classList.contains('header-fixed') && scrolled >= 148) {
			header.classList.add('header-fixed');
		    clearTimeout(timeout);
			timeout = setTimeout(function() {
				logo.src = logo.getAttribute("data-src-small");
			}, 100);
		}
	}

	fixHeader();
	window.onscroll = fixHeader;
})(document.getElementById('header'));


