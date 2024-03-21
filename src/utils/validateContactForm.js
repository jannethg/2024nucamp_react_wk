export const validateContactForm = (values) => {
    const errors = {};  //if there are no errors found, it should include an empty object.

    if(!values.firstName) {
        errors.firstName = 'Required';        
    } else if (values.firstName.length < 2 ) {
        errors.firstName = 'Must be at least 2 characters.'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if(!values.lastName) {
        errors.lastName = 'Required';        
    } else if (values.lastName.length < 2 ) {
        errors.lastName = 'Must be at least 2 characters.'
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;  //will check field enter are digits. if not, an error will appear.
    if(!reg.test(values.phoneNum)) {  //it will test true
        errors.phoneNum = "The phone number should contain only numbers.";
    }

    if(!values.email.includes('@')) {
        errors.email = 'Email should contain an @ symbol';
    }

    return errors;
};