// Basic Fetch Request: Let's retrieve some data from a RESTful endpoint!
// By default, fetch makes a GET request.
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data.species));

// Let's try using fetch to make POST request.
// Ordinarily, you'd use this to send data.
async function fetchPost() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        // You can specify various things in the header for the request.
        // Often this is where you'll put API keys and authorization
        headers: { 
            'Content-Type': 'application/json' ,
            'api-key': "1028rjwfnk30quldkjoq2jr"
        },
        // We've specified that we are sending our content as a JSON.
        // For this placeholder API, we can send any properties over.
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
            panda: true,
            color: "red"
        })
    })
    // console.log(response);
    let data = await response.json();
    console.log("-----------------");
    console.log(data)
}

fetchPost()

// Let's simulate the event loop with some lecture code. 
// Notice how all of this code interacts with timing of the code we wrote previously
console.log('Script start');

setTimeout(() => {
  console.log('Timeout callback 1');
}, 2000);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

setTimeout(() => {
  console.log('Timeout callback 2');
}, 0);

console.log('Script end');

// What happens when you have bad URLs?
fetch('https://pokeapi.co/api/v2/pokmon/ditto')
    .then(res => res.json())
    .then(data => console.log(data.name))
    .catch(err => console.error('Fetch failed:', err));