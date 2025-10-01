/* Write a JavaScript program to convert a given string's length to bytes. */

const byte_Size = (str) => new Blob([str]).size;

// Test the function with different strings
console.log(byte_Size("123456"));
console.log(byte_Size("Hello World"));
console.log(byte_Size("Ã¢"));

// const testingBlob = new Blob(["This is sample"], { type: "text/plain" });
// const url = URL.createObjectURL(testingBlob);

// const a = document.createElement("a");
// a.href = url;
// a.download = "abc.txt";
// a.click();
// URL.revokeObjectURL(url);
