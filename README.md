# RestAPI-test

# User Database:

- Open server by inputting "node src/server.js" to the terminal

# POST: Create User:

- How add user detail to the database (username, email, password)
- URL: http://localhost:5000/user (input this to the adress bar in Thunder Client/Insomnia)
- Json Content: 
       - {
        "username": "USERNAME",
        "email": "EMAIL",
        "password": "PASSWORD" (Encrypted by bcryptjs)
       }

# DELETE: Remove User:

- How remove a single user from the database (username)
- URL: http://localhost:5000/<username>  Example:  http://localhost:5000/wumpfroot  (Case sensitive)
  (input this to the address bar in Thuder Client/Insomnia)

# GET: Search User:

- How search for a user in the database (username)
- URL: http://localhost:5000/<username> (input this to the adress bar in Thunder Client/Insomnia)

# PATCH: Update Username:

- How update username of a specific user (username)
- URL: http://localhost:5000/<old username> Example: http://localhost:5000/badusername (case sensitive)
- Json Content:
     - {
       "username": "NEW USERNAME"
     }

# POST: Json Web token

- Added a login system (displays the userinfo)
- URL: http://localhost:5000/login
- - Json Content:
     - {
       "username": "USERNAME",
       "password": "PASSWORD"
     }

# GET: Check User by token

- In API client (thunder client, insomnia) add a header called: Authorization in the headers tab.
- Copy and paste the token to the value field of Authorization 
- URL: http://localhost:5000/user




