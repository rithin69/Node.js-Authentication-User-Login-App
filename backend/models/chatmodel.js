const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

/*Certainly! Let's break down this MERN (MongoDB, Express, React, Node.js) chatbot app's schema in 
layman's terms. You're using Mongoose, a Node.js package that provides a straightforward way to model data 
for MongoDB (a NoSQL database).

Your schema, chatModel, is like a blueprint for how each chat 
record in your database should be structured. Think of it as defining the rules 
and structure of a form that needs to be filled out every time a new chat record is
created in your database. Here's what each part of the schema means:

chatName:

This field stores the name of the chat. It's of type String, meaning it will hold text.
trim: true means that any leading or trailing whitespace in the chat name will be removed. 
It's like automatically cleaning up the name to make sure it looks neat.

isGroupChat:

This field specifies whether the chat is a group chat or not. It's a Boolean value, which means it 
can be either true (yes, it is a group chat) or false (no, it's not a group chat).
default: false sets the default value of this field to false. So, if you don't specify anything 
when creating a chat, it will assume it's not a group chat.

users:

This is an array that lists the users in the chat.
Each user is identified by an ObjectId, which is a unique identifier in MongoDB. 
It's like a special code that MongoDB uses to keep track of different items (in this case, users).
ref: "User" tells Mongoose that these IDs refer to documents in the User collection. It's like saying, 
"These codes you see here? You can find more information about them in the 'User' folder."

latestMessage:

This field stores the ID of the latest message in the chat.
Like users, it uses ObjectId and refers to a document in the Message collection. 
It’s a way to link a message in the chat to its detailed record in the database.

groupAdmin:

If the chat is a group chat, this field stores the ID of the user who is the admin of the group.
Again, it uses ObjectId and refers to the User collection, linking to the user who has
 administrative privileges in the group chat.
timestamps: true:

This option tells Mongoose to automatically add two fields to each document: createdAt and updatedAt.
createdAt is the date and time when the chat record was created.
updatedAt is the date and time when the chat record was last updated.
So, in essence, your chatModel is a set of rules describing what information should be 
stored about each chat in your database, including details like the name of the chat, 
whether it's a group chat, who's in the chat, the latest message, and who's the admin of the group
(if it's a group chat). The timestamps option ensures that each record also keeps track of when it was created and 
last updated.


User
can you explain the users in the schema in more detail
ChatGPT
Absolutely! Let's dive deeper into the users field in your chatModel schema to understand it in more detail.

In your MERN chatbot app, the users field represents the list of users who are part of a chat. 
This field is defined as an array in your schema, which means it can hold multiple values, each 
representing a user. Here's a breakdown of its structure:

users: [ { ... } ]
Array of Objects: The square brackets [ ] denote that users is an array. In simple terms, 
think of it as a list where you can add multiple items. In this case, each item in the list will 
represent a user in the chat.
Each object in this array is structured as follows:

type: mongoose.Schema.Types.ObjectId:

type specifies the data type of the field. Here, it is set to mongoose.Schema.Types.ObjectId, 
which is a special type used by MongoDB to represent a unique identifier for a document in the database.
An ObjectId is like a unique code or ID card number that MongoDB assigns to each document (or record) in a collection.
It ensures that each document can be uniquely identified.
In the context of your chat app, this means each user in the chat is identified by their unique ObjectId from the User
collection in your MongoDB database.

ref: "User":

ref stands for reference. It tells Mongoose which model (or collection) this ID refers to. 
In your case, "User" indicates that the ObjectId values in the users array correspond to documents in the User collection.
This is a way of creating a relationship between different collections in MongoDB. It's like saying, 
"This ID number belongs to a person (user) whose detailed information you can find in the 'User' collection."
Practical Example:
Imagine you have a chat called "MERN Enthusiasts". In your database, this chat will have a record in 
which the users field might look something like this:

json
Copy code
"users": [
  "60b8d2958e45f8f6f1234567",
  "60b8d2958e45f8f6f7654321"
]
Here, "60b8d2958e45f8f6f1234567" and "60b8d2958e45f8f6f7654321" are examples of ObjectIds. 
They are unique identifiers for users who are part of this chat, and they reference specific documents 
in the User collection. So, if you want to find out who these users are, you'd look up these IDs in the User collection,
where you'd find more information like their names, email addresses, etc.

In Summary:
The users field in your chatModel schema is a list that keeps track of which users (identified by their unique IDs)
are part of a chat. This setup allows your chat application to associate each chat with its participants, 
linking each participant to their respective record in the User collection.


*/


