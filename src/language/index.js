const optionLanguage = [
    { key : 'pt-BR', value : 'pt-BR'}, 
    { key : 'pt', value : 'pt-BR'},
    { key : 'es', value : 'pt-BR'},
    { key : 'en', value : 'pt-BR'},
    { key : 'en-US', value : 'pt-BR'},    
]

let chosenLanguage = optionLanguage.find((e) => e.key === navigator.language)
chosenLanguage = chosenLanguage ? chosenLanguage.value : 'en'

export const languageName = chosenLanguage;
export const language = require('./' + chosenLanguage + '.json');