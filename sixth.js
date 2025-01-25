let male = true;
console.log(`${male ? ' You are a male' : 'You are a female'}`);
let grade = prompt('Enter your grade').toUpperCase();
switch (grade) {
    case 'A':
        console.log(`You are topper`);
        break;
    case 'B':
        console.log(`You are good`);
        break;
    case 'C':
        console.log(`You passed ,Nice`);
    case 'E':
        console.log(`You Failed`);
        break;
    default:
        console.log(`Invalid grade , wait for the proper resule`);
        break;
}