const actioner = event => {
	const targetElement = event.target;
	if (targetElement.className !== "button") return;

	const listElement = targetElement.parentElement.parentElement;
	listElement.style.marginLeft = "8rem";
	listElement.style.opacity = "0";

	setTimeout(() => listElement.remove(), 400);
};

document.querySelector("ul").addEventListener("click", actioner);
