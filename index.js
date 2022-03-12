// Assignment: Fetching JSON
//
//
// Description:
// We have a JSON file on our server that holds an array of
// important numbers for our client-side JavaScript application.
// To use these in our client-side application without leaving
// the index page, we can use AJAX through the Fetch API!
//
// We will use a button on our index page to call our fetch
// method which retrieves the array of numbers.
//
// Once we retrieve the array of numbers from our JSON file, we
// will choose one at random and display it on our page.
//
//
// Instructions:
// (Note: Write code in "Assignment Code Goes Here" section of
// this file)
//
// Step 1: First retrieve our <button> and <div> elements from the
//         DOM and store them in two separate variables for usage.
//         (refer to the index.html file's code to determine the
//         best way to retrieve these two elements)
//
// Step 2: Attach a click event listener to the <button> element
//         retrieved from the DOM.
//
//         Follow Step 3 to construct this event's
//         callback function.
//
// Step 3: Inside the callback function passed to the <button>'s
//         click event, create a "fetch" call and pass the name
//         of our JSON file into it as its "input" parameter.
//
//         Follow Step 4 to handle the Promise returned by the
//         "fetch" call.
//
// Step 4: Inside the first "then" call's callback function, we
//         want to convert the response parameter's incoming
//         data into JSON.
//
//         To do this, there is a Promise we must retrieve by
//         calling the JSON-related method residing on the
//         response parameter thereby getting said Promise in
//         return.
//
//         Then we can return that Promise out of our first
//         "then" call, which will then be handled by a chained
//         second "then" call.
//
// Step 5: Inside the second "then" call's callback function, our
//         parameter is now the data from the JSON file converted
//         into JavaScript for easy usage.
//
//         This data is the array held in the JSON file.
//
//         Call the pre-made "getRandomIndexValue" function and
//         pass your array into it. It will return a random number
//         from the array.
//
//         Follow Step 6 to display the number on our index page.
//
// Step 6: In the same scope as Step 5, use the <div> retrieved
//         earlier and set its text content to be the number
//         retrieved from the "getRandomIndexValue" call.
//
// Step 7: Finally, chain a "catch" call onto the end of the Promise
//         chain. In its callback function, print out its single
//         parameter to the console.
//
// Step 8: We are ready to test our client-server app. The first
//         thing we must do is install all of the Node.js project's
//         dependencies.
//
//         1) Navigate to this project folder in Git Bash.
//         2) Enter this into the terminal:
//            npm install
//
// Step 9: Now we can run our client-server app. In the same folder
//         on Git Bash, we will need to start the server.
//
//         1) Enter this into the terminal:
//            node app.js
//
// Step 10: Now let's open the website in our browser.
//
//          1) Enter this into your browser's address bar:
//             http://localhost:3000/


// ⬇⬇⬇⬇⬇⬇ Assignment Code Goes Here ⬇⬇⬇⬇⬇⬇



// ⬆⬆⬆⬆⬆⬆ Assignment Code Goes Here ⬆⬆⬆⬆⬆⬆


// NOTE: Review the pre-made code below to learn how it
//       functions and interacts with the rest of your code;
//       however, do not change any code below in the
//       submission of the assignment!

function getRandomIndexValue(_array) {
	const RANDOM_INDEX = Math.floor(Math.random() * _array.length);
	return _array[RANDOM_INDEX];
}