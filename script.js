//10.Write a JavaScript program to construct the following pattern, usinga nested for loop
star = () => {
  let i, j, row = window.prompt("enter a number");

  for (i = 0; i <= row; i++) {
    for (j = 1; j <= i; j++) {
      document.write("*");
    }

    document.write("<br>");
  }
}
//________________________end____________________________________

// 9.Write a JavaScript program to print the letters of the word “Javascript” as below in each line using for…of.
javascript = () => {
  var str = "javascript";
  for (var i = 0; i <= str.length; i++) {
    for (var j = 0; j < i; j++) {
      document.write(str[j]);
    }
    document.write("<br>");
  }
}
//________________________end____________________________________

//7.Write a JavaScript program that accept two integers and display the larger using findLarge() function.
findLarge = () => {
  var num1, num2;
  num1 = window.prompt("Input the First integer", "0");
  num2 = window.prompt("Input the second integer", "0");

  if (parseInt(num1, 10) > parseInt(num2, 10)) {
    document.write(`The larger of ${num1} and ${num2} is ${num1}.`);
  } else
  if (parseInt(num2, 10) > parseInt(num1, 10)) {
    document.write(`The larger of ${num1} and ${num2} is ${num2}.`);
  } else {
    document.write(`The values ${num1} and ${num2} are equal.`);
  }
}
//________________________end____________________________________

//5.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, checkif the current number is odd or even, and display the message to the screen as oddor even.
oddeven = () => {
  for (var i = 0; i <= 15; i++) {
    if (i === 0) {
      document.write(`${i} is even`);

    } else if (i % 2 === 0) {
      document.write(`${i} is even`);

    } else {
      document.write(`<b>${i} is odd</b>`);

    }
    document.write("<br>");
  }
}
//________________________end____________________________________

// 2. Write a JavaScript program to find the most frequent item of an array.
frequentitem = () => {
  var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; //array
  var mf = 1; //default maximum frequency
  var m = 0; //counter
  var item; //to store item with maximum frequency
  for (var i = 0; i < arr1.length; i++) //select element (current element)
  {
    for (var j = i; j < arr1.length; j++) //loop through next elements in array to compare calculate frequency of current element
    {
      if (arr1[i] == arr1[j]) //see if element occurs again in the array
        m++; //increment counter if it does
      if (mf < m) //compare current items frequency with maximum frequency
      {
        mf = m; //if m>mf store m in mf for upcoming elements
        item = arr1[i]; // store the current element.
      }
    }
    m = 0; // make counter 0 for next element.
  }
  alert(`${item} ( ${mf} times ) `);
}
//________________________end____________________________________

// 3. Write a JavaScript program which accept a string as input and swap the case ofeach character. For example if you input 'The Quick Brown Fox' the output shouldbe 'tHE qUICK bROWN fOX'.
function myFunction() {
  var A = document.getElementById('input').value;
  var output = '';
  for (var i = 0, len = A.length; i < len; i++) {
    var character = A[i];
    if (character == character.toLowerCase()) {
      // The character is lowercase
      output = output + character.toUpperCase();
    } else {
      // The character is uppercase
      output = output + character.toLowerCase();
    }
  }
  document.getElementById("preview").innerText = output;
}
//________________________end____________________________________

// 4. Write a JavaScript program to find the sum of squares of the elements of an array.

function sum_sq() {

  var array = [];
  var size = prompt("Enter the size of array"); //Maximum Array size

  for (var i = 0; i < size; i++) {

    //Taking Input from user
    array[i] = prompt(`Enter Element ${i + 1}`);
  }

  //Print the array in the console.
  console.log(array);
  var sum = 0,
    i = array.length;
  while (i--) {
    sum += Math.pow(array[i], 2);
  }

  alert(`The sum of squares of the elements of array = ${sum}`);
}
//________________________end____________________________________

// 1. Write a JavaScript function to get an array and to read the first element of an array.Check whether it is prime or not. 
function prime() {

  var array = [];
  var size = prompt("Enter the size of array"); //Maximum Array size

  for (var i = 0; i < size; i++) {

    //Taking Input from user
    array[i] = prompt(`Enter Element ${i + 1}`);
  }

  //Print the array in the console.
  console.log(array);
  n = parseInt(array[0]);

  function testprime(n) {
    if (n === 1) {
      return alert(`${n} is not prime number`);
    } else if (n === 2) {
      return true;
    } else {
      for (var x = 2; x < n; x++) {
        if (n % x === 0) {
          return alert(`${n} is not prime number`);
        }
      }
      return alert(`${n} is a prime number`);
    }
  }
  testprime(n);
}
//________________________end____________________________________

//6. Write a JavaScript function to truncate a string if it is longer than the specified number of characters.

function truncate() {
  var input = prompt("Enter a string to trucate to 5 charecters")
  if (input.length > 5)
    return alert(`${input.substring(0, 5)}...............`);
  else
    return alert(`no need to trucate `);
}









//________________________end____________________________________

// 8. Write a JavaScript program using for…in to read the objects from an array entered by an user and to arrange it in alphabetical order.
sorting = () => {
  function dynamicSort(property) {

    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }
  var People = [{
      Name: "ZZZ"
    },
    {
      Name: "AAA"
    },
    {
      Name: "BBB"
    },
    {
      Name: "EEE"
    },
    {
      Name: "DDD"
    },
    {
      Name: "FFF"
    },
    {
      Name: "CCC"
    }
  ];
  console.log(People.sort(dynamicSort("Name")));
}
//________________________end____________________________________