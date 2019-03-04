
class Validation {
    constructor (name, rule, errMes){
        this.name = name
        this.rule = rule
        this.errMes = errMes
    }

    check = text => {
        return this.rule(text);
    }
}

export const isExist = new Validation(
    'isExist',
    function (text){return text.match(/\S/)},
    'Required'
)

export const emailFormat = new Validation(
    'emailFormat',
    text => !!text.match(/[\w-]+@([\w-]+)\.+[\w-]+/i),
    'invalid email'
)

export const uppercase = new Validation(
    'uppercase',
    text => !!text.match(/[A-Z]/),
    'at least one upper case'
)
  
export const lowercase = new Validation(
    'lowercase',
    text => !!text.match(/[a-z]/),
    'at least one lower case'
)

export const passwordLength = isValidateLength(6, 15);

export const nameLength = isValidateLength(0, 200);

export function isValidateLength(min_len, max_len) {
    return new Validation(
      'input_length',
      text => text.length >= min_len && text.length <= max_len,
      `Input has to be ${min_len}-${max_len} letters`
    )
  }

export default function validate(validations, text) {
    const len = validations.length;
    for(let i = 0; i < len; i++) {
        if (!validations[i].check(text)) {
            return validations[i].errMes;
        }
    }
}