const blogs = [
    { 
        title: 'why mac & cheese rules',
        likes: 30 },
    { 
        title: '10 things to make with marmite',
        likes: 50 }
];

let user = {
    name: 'crystal',
    age: 30,
    email: 'crytal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { 
            title: 'why mac & cheese rules',
            likes: 30
        },
        { 
            title: '10 things to make with marmite',
            likes: 50
        }
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(`${blog.title} - ${blog.likes} likes`);
        });
    }
}

console.log(user);
console.log(user.name);
console.log(user['name']);
user.age = 35;
console.log(user.age);
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']); 
user.login();
user.logBlogs();
user.logout();
console.log(this); // window object
console.log(this.document); // undefined

// Math object
console.log(Math); // Math object and methods.
console.log(Math.PI); // PI value
console.log(Math.E); // E value
const area = 7.7;
console.log(Math.round(area)); // round the number
console.log(Math.floor(area)); // round down the number
console.log(Math.ceil(area)); // round up the number
console.log(Math.trunc(area)); // remove the decimal part
const random = Math.random();
console.log(random); // random number between 0 and 1
console.log(Math.round(random * 100)); // random number between 0 and 100

// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);
