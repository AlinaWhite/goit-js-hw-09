const form = document.querySelector('.feedback-form');
const formData = {};

let savedfeedback = () => {
  const formDateFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formDateFromLS === null) {
    return;
  }

  formData = formDateFromLS;

  console.log(formDateFromLS);

  for (const key in formDateFromLS) {
    if(formDateFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDateFromLS[key];
    }
  }
};

savedfeedback();

const saveInfoMessege = event => {
  const formName = event.target.name.trim();
  const formValue = event.target.value.trim();
  formData[formName] = formValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}; 

const submitForm = event => {
  event.preventDefault();
  const message = form.elements.message.value;
  const email = form.elements.email.value;
  if ( message === '' || email === '') {
    alert('Fill please all fields');}
  else { 
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
  };
};


form.addEventListener('input', saveInfoMessege);
form.addEventListener('submit', submitForm);