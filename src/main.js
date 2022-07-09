//import './styles/index.scss';



const userStack = {
    language: 'JavaScript',
    framework: 'None',
}

const user = {
    name: 'Zzz',
    age: '27',
    ...userStack
}

console.log(user);