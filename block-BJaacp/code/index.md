1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` // false and first array `[10]` and the second array `[10]` is stored in separate memory address 
- What is the value of obj? // { surname: 'Stark' } and { surname: 'Stark' } value is reassign to the obj variable, it will change the value in the memory reference address 
- `obj == newObj` // false and `obj` and `newObj` is stored in separate reference address in the memory
- `obj === newObj` // false and `obj` and `newObj` is stored in separate reference address in the memory
- `user === newObj` // false and `user` is assigned to `obj` object, `obj` variable value is stored in a memory address and `newObj` is stored in an another memory address
- `user == newObj` // false and `user` is assigned to `obj` object, `obj` variable value is stored in a memory address and `newObj` is stored in an another memory address
- `user == obj` // ture and `user` is assigned to `obj` and both variable pointing to the same memory address
- `arr == arr2` // ture and `arr` is assigned to `arr2` and both variable pointing to the same memory address
- `arr === arr2` // ture and `arr` is assigned to `arr2` and both variable pointing to the same memory address

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.
- `person1` will be `{ name: 'Alex', age: 25 }` becauuse  when the function executed with `person1` argument it will change the age key value in the memory address of the `person1` variable. `person2` will be `{ name: 'John', age: 50 }` because when the function personDetails(person1) called it made a persion object and return it to the `person2`.
<!-- To add this image here use ![name](./hello.jpg) -->
![personDetails](./persion.jpg)

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true
console.log(user.brothers.length === brothers.length); //2. true
```
