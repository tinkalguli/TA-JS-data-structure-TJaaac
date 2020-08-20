// 1. Define a variable named `students` and assign a blank object to it.
let students = {};
// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.
let myName = "Tinkal";
students.studentName = myName;
// 3. Using `console.log` log the value of `studentName` key from the `students` object
console.log(students.studentName);
// 4. Add a another key of the value of variable `batch` in the object with the value of 16.
let keyValue1 = "batch";
students[keyValue1] = 16;

// 5. Using `console.log` log the value of `batch` key from the `students` object
console.log(students.batch);
// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
let keyValue2 = "isAdult";
students[keyValue2] = "true/false";
// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(students.isAdult);
// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.
students[42] = `The answer to the meaning of life`;
// 9. Using `console.log` print the value of key `42` from the `students` object
console.log(students[42]);
// 10. Check the length of object named `students`.
Object.keys(students).length;
// 11. Can you define a key of `let or var` in any object? Reason.
console.log(
    `Yes, we can use reserve keyword of javascript in an object. Because object keywords are string. If we use let keyword in an object then it will become a string. That's why when we access any key which is a word using square bracket [], then we have to give double code inside the square bracket like this => obj"let".`
);
// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
students

delete students.isAdult;

students
// 13. Update the value of the key batch in the object `students` and print it using `console.log`
students.batch = 17;
console.log(students.batch);