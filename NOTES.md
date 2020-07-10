REST = Representation State Transfer
____
A convention for how to organize our API endpoints

An API that follows the rest architecture is known as a RESTful API

Somethings to keep in mind: 
- We think of everything as a resource (a user, a blog post, a comment, etc)
- Each resource should have its own, unique URL
- Use resource names alongside HTTP methods to define these URLs
- Our endpoints should be stateless

?? instead of /listUsers >> GET /users
?? instead of /getUserById >> GET '/users/:id
?? insetad of /createUsers >> POST /users
?? instead of /updateUserByID >> PUT /users/:id
?? instead of /deleteUserByID >> DELETE /users/:id
?? instead of /listUserFriends >> GET /users/:id/friends
?? instead of /getUserFriendByID >> GET /users/:id/friends/:friendID
?? instead of /createUserFriend >> POST /users/:id/friends
?? instead of /getAllFriends >> GET /friends