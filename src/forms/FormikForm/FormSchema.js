import * as yup from 'yup';

// const age_regex = /[0-9]/g;
const phone_regex = /^\+?3?8?(0\d{9})$/;
const address_regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
const no_spacing_regex = /^[a-zA-Z0-9]*$/;
const only_letters_regex = /^[a-zA-Z]+$/;
// const address_regex = /\b(\d{2,5}\s+)(?![a|p]m\b)(NW|NE|SW|SE|north|south|west|east|n|e|s|w)?([\s|\,|.]+)?(([a-zA-Z|\s+]{1,30}){1,4})(court|ct|street|st|drive|dr|lane|ln|road|rd|blvd)/i;

export const FormSchema = yup.object().shape({
    firstName: yup.string()
        .min(2, 'Min name length is 2 symbols')
        .matches(only_letters_regex, 'Name can contain only letters')
        .matches(no_spacing_regex, 'Enter your name without spacing')
        .required('This field is required'),
    lastName: yup.string()
        .min(2, 'Min name length is 2 symbols')
        .matches(only_letters_regex, 'Last name can contain only letters')
        .matches(no_spacing_regex, 'Enter your last name without spacing')
        .required('This field is required'),
    age: yup
        .number('Please, enter numbers only')
        .positive()
        // .matches(age_regex, 'Enter your age from 17 till 200')
        .required()
        .integer(),
    address: yup.string()
        .matches(address_regex, 'Please, enter a valid address')
        .max(150, 'It is too long address')
        .required('This field is required'),
    tel: yup.string()
        .matches(phone_regex, 'Your phone number should look like +380938107132')
        .min(13)
        .max(13)
})
