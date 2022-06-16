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
  (input this to the adress bar in Thuder Client/Insomnia)

# GET: Search User:

- How search for a user in the database (username)
- URL: http://localhost:5000/user (input this to the adress bar in Thunder Client/Insomnia)
- Json Content:
     - {
        "username": "USERNAME"
     }

# PATCH: Update Username:

- How update username of a specific user (username)
- URL: http://localhost:5000/<old username> Example: http://localhost:5000/badusername (case sensitive)
- Json Content:
     - {
       "username": "NEW USERNAME"
     }




