**Assignment #1 — Express.js CRUD API with JSON Storage**
_Student name: Jangazy Bakytzhan_
_Group: SE-2431_
_Project Description_

This project is my first backend application built using Node.js and Express.js.
The goal of the assignment was to create a simple API that supports CRUD operations and stores all data inside a local JSON file instead of a real database.

The project includes:

A basic Express server

Demo routes (/, /hello, /time, /status)

A custom CRUD API (GET, POST, PUT, DELETE)

JSON file persistence using fs

API testing using Thunder Client / Postman

This project demonstrates my understanding of Express fundamentals, routing, middleware, and working with JSON data.

_Project Structure_
project/
│ server.js
│ data.json
│ package.json
│ package-lock.json
│ README.md
│ .gitignore
└── node_modules/

_Installation & Running the Server_
1️⃣ Install all dependencies

Before running the server, install required packages:

npm install

2️⃣ Start the server

To run the API:

node server.js

The server will start at:

http://localhost:3000

_API Routes (Implemented by Me)_
🔵 Demo Routes
GET /

Returns a simple message confirming that the server is running.

GET /hello

Returns a JSON message:

{ "message": "Hello from server!" }

GET /time

Returns the current server time.

GET /status

Always returns 200 OK with:

{ "status": "OK" }

_CRUD API (My Custom Object)_

I created a simple object that contains:

id (generated automatically)

name (string)

All objects are stored in data.json.

1️⃣ GET /objects

Returns the full list of objects.

Example response:

[
{
"id": 1713026123456,
"name": "Test object"
}
]

2️⃣ POST /objects

Creates a new object.

JSON Body Example:
{
"name": "My first object"
}

Example response:
{
"id": 1713026123456,
"name": "My first object"
}

3️⃣ PUT /objects/:id

Updates an existing object by ID.

URL example:
http://localhost:3000/objects/1713026123456

JSON Body:
{
"name": "Updated name"
}

4️⃣ DELETE /objects/:id

Deletes an object by ID.

URL example:
http://localhost:3000/objects/1713026123456

Response:
{ "success": true }

_API Testing (Thunder Client)_

I tested all routes using Thunder Client in VS Code (equivalent to Postman).

Notes:

For GET and DELETE:
→ No body is required

For POST and PUT:
→ Body type must be set to JSON
→ Example:

{
"name": "Test object"
}

📄 Example of data.json
{
"objects": []
}

The file updates automatically after creating, editing, or deleting an object.

_What I Learned and Can Defend_

During this assignment, I learned:

How to create an Express server

What middleware is (express.json())

How routing works in Express

Difference between GET, POST, PUT, DELETE

How to use the fs module to read/write JSON

How CRUD APIs work

How to test endpoints using Postman / Thunder Client

I can now confidently explain how each part of my backend works.
