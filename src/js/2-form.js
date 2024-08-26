const form = document.querySelector('.feedback-form');
let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const {email, message} = form.elements;

const savedfeedback = () => {
  email.value = formData.email || '';
  message.value = formData.message || '';

};

savedfeedback();

const saveInfoMessege = event => {
  formData[event.target.name] = event.target.value.trim();;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}; 

const submitForm = event => {
  event.preventDefault();
  
  if ( message.value.trim() === '' || email.value.trim() === '') {
    alert('Fill please all fields');}
  else { 
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    formData = {};
  };
};


form.addEventListener('input', saveInfoMessege);
form.addEventListener('submit', submitForm);