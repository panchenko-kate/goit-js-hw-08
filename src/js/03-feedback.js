import throttle from 'lodash.throttle';

const LOCAL_STORAGE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE);
}

function onFormInput(evt) {
    let fixedFilters = localStorage.getItem(LOCAL_STORAGE);
    fixedFilters = fixedFilters ? JSON.parse(fixedFilters) : {};
    fixedFilters[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(fixedFilters));
}

function initForm() {
    let fixedFilters = localStorage.getItem(LOCAL_STORAGE);
    if (fixedFilters) {
        fixedFilters = JSON.parse(fixedFilters);
        Object.entries(fixedFilters).forEach(([name, value]) => {
        form.elements[name].value = value;
      });
    }
}
