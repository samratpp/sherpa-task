// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	// get form
	const inputForm = document.getElementById('mainForm');
	// add listener on submit
	inputForm.addEventListener('submit', (e) => {
		// prevent default submit behavior of the form
		e.preventDefault();
		// get phone number on submit
		let phoneNo = document.getElementById('phoneNo');
		// use validateForm function to validate phone number
		validateForm(phoneNo.value);
	});
});

// accepts phone number as parameter to be validated
const validateForm = (phoneNo) => {
	if (phoneNo == '') {
		// if empty
		errorHandler('Phone number cannot be empty');
	} else if (phoneNo.length <= 3) {
		// if number is less than 3
		errorHandler('Number must be greater than 3');
	} else {
		errorHandler('');
	}
};

// msg accepts error message
const errorHandler = (msg) => {
	// get errorBox from html
	const errorField = document.getElementById('errorBox');
	// add class show to the error box: display block
	errorField.classList.add('show');
	errorField.innerText = msg;
};
