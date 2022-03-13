// Template Literal In JS

// Allows you to embed js variables in string

const name= "Bharat Gavade"
const role="Full stack web Devloper "
const location= "India"

const sentence ="My name is "+name +"and I am a" + role+". I stay in"+location
console.log(sentence)

const sentenceUsingTemplateLiteral=
    `My name is ${name}and I am a ${role}. I stay in ${location}`
console.log(sentenceUsingTemplateLiteral)
