// var da = new Date();
// //date without new returns a string not a date object, thats why without new no function will work 


// // Create a new Date object
// let d = new Date();

// // Get parts of the date
// d.getFullYear();      // Year (e.g., 2025)
// d.getMonth();         // Month (0-11)
// d.getDate();          // Day of the month (1-31)
// d.getDay();           // Day of the week (0-6, 0=Sunday)
// d.getHours();         // Hours (0-23)
// d.getMinutes();       // Minutes (0-59)
// d.getSeconds();       // Seconds (0-59)
// d.getMilliseconds();  // Milliseconds (0-999)
// d.getTime();          // Milliseconds since Jan 1, 1970

// // Set parts of the date
// d.setFullYear(2025);
// d.setMonth(3);        // April (months are 0-indexed)
// d.setDate(15);
// d.setHours(10);
// d.setMinutes(30);
// d.setSeconds(45);

// // Formatting
// d.toString();         // Full date and time as string
// d.toDateString();     // Date only
// d.toTimeString();     // Time only
// d.toISOString();      // ISO format
// d.toLocaleDateString(); // Localized date
// d.toLocaleTimeString(); // Localized time



// // Math constants
// Math.PI;        // 3.141592653589793
// Math.E;         // 2.718281828459045

// // Basic operations
// Math.abs(-5);           // 5 (absolute value)
// Math.ceil(4.2);         // 5 (round up)
// Math.floor(4.8);        // 4 (round down)
// Math.round(4.5);        // 5 (round to nearest)
// Math.trunc(4.9);        // 4 (remove decimal part)

// // Powers and roots
// Math.pow(2, 3);         // 8 (2^3)
// Math.sqrt(16);          // 4 (square root)
// Math.cbrt(27);          // 3 (cube root)

// // Min, Max, Random
// Math.min(1, 2, 3);      // 1
// Math.max(1, 2, 3);      // 3
// Math.random();          // Random number between 0 (inclusive) and 1 (exclusive)

// // Trigonometry
// Math.sin(Math.PI / 2);  // 1
// Math.cos(0);            // 1
// Math.tan(Math.PI / 4);  // 1

// // Logarithms
// Math.log(10);           // Natural log (base e)
// Math.log10(100);        // Log base 10
// Math.log2(8);           // Log base 2

// // Other
// Math.sign(-10);         // -1 (sign of the number)
// Math.exp(1);            // e^1
// Math.hypot(3, 4);       // 5 (sqrt(3^2 + 4^2))



// console.log(null === null); // true
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null == 0); // false
// console.log(null == ""); // false
// console.log(null == false); // false
// console.log(null == NaN); // false
// console.log(null == {}); // false
// console.log(null == []); // false
// console.log(null == true); // false
// console.log(null == "null"); // false

// console.log(typeof null); // object
// console.log(typeof undefined); // undefined 
// console.log(typeof NaN); // number
// console.log(typeof 0); // number
// console.log(typeof ""); // string
// console.log(typeof false); // boolean
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(typeof true); // boolean
// console.log(typeof Symbol()); // symbol
// console.log(typeof BigInt(123)); // bigint


// console.log(NaN === NaN); // false
// console.log(NaN == NaN); // false
// console.log(NaN === undefined); // false
// console.log(NaN == undefined); // false
// console.log(NaN === null); // false
// console.log(NaN == null); // false
// console.log(NaN === 0); // false
// console.log(NaN == 0); // false
// console.log(NaN === ""); // false
// console.log(NaN == ""); // false
// console.log(NaN === false); // false        
// console.log(NaN == false); // false
// console.log(NaN === true); // false
// console.log(NaN == true); // false
// console.log(NaN === {}); // false   
// console.log(NaN == {}); // false
// console.log(NaN === []); // false
// console.log(NaN == []); // false
// console.log(NaN === Symbol()); // false
// console.log(NaN == Symbol()); // false
// console.log(NaN === BigInt(123)); // false