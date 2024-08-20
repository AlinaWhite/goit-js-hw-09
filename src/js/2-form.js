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
  const formName = event.target.name;
  const formValue = event.target.value;
  formData[formName] = formValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}; 

const submitForm = event => {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');

};


form.addEventListener('change', saveInfoMessege);
form.addEventListener('submit', submitForm);