// export default class test {
//     constructor(name) {
//         console.log({ name })
//     }
//     init(config) {
//         console.log({ config });
//     }
// }




export default class FormValidation {
    formElement = null;
    options = null;
  
    constructor(form, options) {
        if (!form || !options) {
            console.error("Invalid parameter");
        }
        this.formElement = form;
        this.options = options;
        this.formElement.addEventListener("submit", (e) => this.validateForm(e));
    }
    validateForm(e) {
        e.preventDefault();
        const inputNames = Object.keys(this.options)
  
        inputNames.forEach(name => {
            const input = this.formElement.querySelector(`[name="${name}"]`);
  
            // input validate
            if ('minLength' in this.options[name]) {
                const minLength = this.options[name].minLength;
                const nonNumeric = this.options[name].nonNumeric;
                if (input.value.length > minLength && (/[0-9]+/).test(input.value) !== nonNumeric) {
                  showMassage('valid')
                } else {
                    showMassage("invalid");
                }
            }
  
            //  maxlength
            if ('maxLength' in this.options[name]) {
                const maxLength = this.options[name].maxLength;
                if (input.value.length > null && input.value.length < maxLength) {
  
                  showMassage('valid')
                } else {
                    showMassage("invalid");
                }
            }
            // lowercase
            if ('hasLowerCase' in this.options[name]) {
                const hasLowerCase = this.options[name].hasUpperCase;
                if ((/[a-z]/gm).test(input.value) == hasLowerCase) {
                  showMassage('valid')
                } else {
                    showMassage("invalid");
                }
            }
  
            //  url,
            if ('hasHttps' in this.options[name]) {
  
                const hasHttps = this.options[name].hasHttps;
                console.log(hasHttps);
  
                if ((/https/g).test(input.value) == hasHttps) {
                  showMassage('valid')
                } else {
                    showMassage("invalid");
                }
            }
  
            // HASSUPERCASE
            if ('hasUpperCase' in this.options[name]) {
                const hasUpperCasenew = this.options[name].hasUpperCase;
                console.log(input.value);
                if ((/[A-Z]/gm).test(input.value) == hasUpperCasenew) {
  
                  showMassage('valid')
                } else {
                    showMassage("invalid");
  
                }
            }
            // eror function
            function showMassage(x) {
  
                return document.getElementById(name).innerText = `${name}  ${x}`;
            }
            // eror succes funtion
            // function setsuccess(x) {
            //     return document.getElementById(name).innerText = `${name}  ${x}`;
            // }
        })
    }
  }
  
  