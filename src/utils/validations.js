

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
    text => !!text.match(/\s/),
    'Required'
)


export default function validate(validations, text) {
    const len = validations.length;
    for(let i = 0; i < len; i++) {
        if (!validations[i].check(text))
        return validations[i].errMes;
    }
}