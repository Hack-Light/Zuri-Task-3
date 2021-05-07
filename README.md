# Zuri Task 3 - CRUD App with Database

### Hosted Solution

https://zuri-3.herokuapp.com

### Documentation on the routes

#### <code> "/" </code>

This is the home route of the api and displays a simple welcome message.

#### <code> GET "/all" </code>

<code> /all </code> route of the api gets all the users in the data base and sends it to the client.

#### <code> POST "/" </code>

send a POST request to <code> / </code> route of the api to create a new user. Send the following payload with the request.

- name
- email
- country

#### <code> GET "/:id" </code>

Send a GET request to <code> /:id </code> route of the api to get a particular users from the database.

#### <code> PUT "/:id" </code>

Send a PUT request to <code> /:id </code> route of the api to getupdate a particular users in the database.

#### <code> DELETE "/:id" </code>

Send a DELETE request to <code> /:id </code> route of the api to deleta a particular users from the database.
