## ToDoList Backend

# Config:

<pre><ul><li>"jwtPrivateKey": " "</li>
<li>"db": " "</li></ul></pre>

# Models:

<ol>
<li><pre>User
schema: {
    username: String,
    password: String, //  _hashed_
}</pre></li>
<li><pre>List
schema: {
    username: String,
    list: [{
        title: String,
        message: String,
        date: Date.now(),
        isCheck: Boolean,
    }],
}</pre></li>
</ol>

# Routes:

<ol>
<li><pre>Login: to login into user's account | Returns jwt auth-token.
methods: POST
body: {
    username: " ",
    password: " ",
}</pre></li>

<li><pre>User: to register new user's account | Returns jwt auth-token.
methods: POST, PUT
body: {
    username: " ",
    password: " ",
}</pre></li>

<li><pre>list: to create, update, delete , read from list-items | Only for logged-in users
methods: POST, PUT, GET, DELETE
headers: auth-token
body: {
    title: " ",
    message: " ",
}</pre></li>
</ol>
