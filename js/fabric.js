var ideaTextClass = document.getElementById('idea-text').classList;
var ideaButton = document.getElementById('idea-button');

function toggleIdea() {
	if (ideaTextClass.contains('idea-text-visible')) {
		ideaTextClass.remove('idea-text-visible');
		ideaButton.innerHTML = 'Подробнее';
	} else if (!ideaTextClass.contains('idea-text-visible')) {
		ideaTextClass.add('idea-text-visible');
		ideaButton.innerHTML = 'Свернуть';
	}
	return false;
}

ideaButton.onclick = toggleIdea;

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

var headerClass = document.getElementById('header').classList;

function fixHeader() {
	if (document.documentElement.clientWidth < 630) {
		return false;
	}
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	var logo = document.getElementById('logo');
	if (headerClass.contains('header-fixed') && scrolled < 148) {
		headerClass.remove('header-fixed');
		logo.src = logo.getAttribute("data-src-big");
	} else if (!headerClass.contains('header-fixed') && scrolled >= 148) {
		headerClass.add('header-fixed');
		setTimeout(function() {
			logo.src = logo.getAttribute("data-src-small");
		}, 100);
	}
}

fixHeader();
window.onscroll = fixHeader;