function messageToggle(message, messageButton){
    message = document.getElementById(message);
    messageButton = document.getElementById(messageButton);
	if (!message || !messageButton) {
		return false;
	}
	messageButton.onclick = function () {
		if (message.classList.contains('message-visible')) {
			message.classList.remove('message-visible');
			messageButton.innerHTML = messageButton.getAttribute("data-message-show");
		} else if (!message.classList.contains('message-visible')) {
			message.classList.add('message-visible');
			messageButton.innerHTML = messageButton.getAttribute("data-message-hide");
		}
		return false;
	};
}