// charAt
let string = "Hello World!"
console.log(string.charAt(7))
console.log(typeof string.charAt(7)) // type of character is still a string
console.log(string.charCodeAt(7))

console.log("---------------")

// Concatenation
let greet1 = "Hello"
let greet2 = "World"
console.log(greet1.concat(greet2)) // without a space
console.log(greet1.concat(" " , greet2)) // more arguments: with a space
console.log(`${greet1} ${greet2}`) // can also do it with a template literal (preferred)

console.log("---------------")

// Booleans
console.log("Hello World".includes("World")) // Can use a variable, or a literal string for methods
console.log("Hello World".includes("world")) // case sensitive!
console.log("Hello World".startsWith("He"))
console.log("Hello World".endsWith("rld"))

console.log("---------------")

// Indices
console.log("JavaScript".indexOf("Script")) // Where does the "Script" in JavaScript start?
console.log("JavaScript".lastIndexOf("a")) // similar to indexOf, except we're looking for the last index

console.log("---------------")

// Slice
console.log("JavaScript".slice()) // Slice with no arguments just copies the string
console.log("JavaScript".slice(4)) // 1 argument slices to the end
console.log("JavaScript".slice(4, 6)) // 2 arguments slices in a range
console.log("JavaScript".slice(4,0)) // Slice cannot handle a start index > end index
console.log("JavaScript".slice(-3)) // negative lets you slice backwards from the end
console.log("JavaScript".slice(0, -6)) // From 0 to the 6th index from the back

console.log("---------------")

// Substring
console.log("JavaScript".substring(4)) // Substring act similarly to slice...
console.log("JavaScript".substring(4,6))
console.log("JavaScript".substring(-3)) // However negative values are invalid: they become 0
console.log("JavaScript".substring(4,0)) // If start > end, they get swapped

console.log("JavaScript".substr(-3)) // substr is technically deprecated, but it functions like slice for negatives. Only use for legact code

console.log("---------------")

// Replacement
console.log("JavaScript".replace("JavaScript", "Python")) // No matter what the length different, replace can replace part of a string
console.log("pen pineapple apple pen".replace("apple", "pen")) // Replace will only target the first instance it finds 
console.log("pen pineapple apple pen".replaceAll("apple", "pen")) // Replace all will replace all instances found

console.log("---------------")

// Split
console.log("Hello World".split(" ")) // outputs an array of strings split on a delimiter
console.log("apple, banana; orange grape;pear,plum".split(/[ ,;]+/)) // Split can take in complex regexes as well

console.log("---------------")

// Misc
console.log("JavaScript".toLowerCase())
console.log("İSTANBUL".toLocaleLowerCase()) // More compatible with other languages
console.log("JavaScript".toUpperCase())
console.log(" trim me!             ".trim())