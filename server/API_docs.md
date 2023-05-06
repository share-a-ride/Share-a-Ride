# Share-a-ride App Server

Share-a-ride App is an application to share and book rides. This app has :

- RESTful endpoint for admins, users, and rides CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /rides

> Get all assets

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
  {
    "id": 1,
    "startLocation": "Jakarta",
    "destination": "Bandung",
    "departureTime": "2023-05-10T10:00:00.000Z",
    "arrivalTime": "2023-05-10T13:00:00.000Z",
    "price": 75000,
    "seats": 3,
    "createdBy": 1,
    "VehicleId": 1,
    "createdAt": "2023-05-06T09:20:14.194Z",
    "updatedAt": "2023-05-06T09:20:14.194Z"
  },
  {
    "id": <ride id>,
    "startLocation": <ride origin>,
    "destination": <ride destination>,
    "departureTime": <ride departure time>,
    "arrivalTime": <ride estimated arrival time>,
    "price": <ride price>,
    "seats": <ride seats left>,
    "createdBy": <creator (user) id>,
    "VehicleId": <creator's vehicle id>,
    "createdAt": "2023-05-06T09:20:14.194Z",
    "updatedAt": "2023-05-06T09:20:14.194Z"
  }
]
```

---

### GET /rides/:id

> Get ride by id

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
    "id": <ride id>,
    "startLocation": <ride origin>,
    "destination": <ride destination>,
    "departureTime": <ride departure time>,
    "arrivalTime": <ride estimated arrival time>,
    "price": <ride price>,
    "seats": <ride seats left>,
    "createdBy": <creator (user) id>,
    "VehicleId": <creator's vehicle id>,
    "createdAt": "2023-05-06T09:20:14.194Z",
    "updatedAt": "2023-05-06T09:20:14.194Z"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Data not found"
}
```

---

### POST /rides

> Create new ride

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "startLocation": "<ride origin>",
  "destination": "<ride destination>",
  "departureTime": "<ride departure time>",
  "arrivalTime": "<ride estimated arrival time>",
  "price": "<ride price per passenger>",
  "seats": "<number of seats available>",
}
```

_Response (200 - Created)_

```
{
  message: "New ride with <ride id> created"
}
```

_Response (400 - Bad Request)_

```
{
  "message": <validation error>
}
```

---

### DELETE /rides/:id

> Delete ride with <id>

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
  message: "Ride with id <ride id> deleted"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Data not found"
}
```

---

### PUT /rides/:id

> Edit ride with <id>

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "startLocation": "<ride origin>",
  "destination": "<ride destination>",
  "departureTime": "<ride departure time>",
  "arrivalTime": "<ride estimated arrival time>",
  "price": "<ride price per passenger>",
  "seats": "<number of seats available>",
}
```

_Response (200 - Created)_

```
{
  message: "Ride with id <ride id> updated"
}
```

_Response (400 - Bad Request)_

```
{
  "message": <validation error>
}
```

_Response (404 - Not Found)_

```
{
  "message": "Data not found"
}
```

---

### POST /rides/order/:id

> Create new order for ride with <id>

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (201 - Created)_

```
{
  message: "Order received"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Data not found"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "You have ordered this ride"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "The ride is fully booked"
}
```

---

### DELETE /order/:id

> Cancel order with <id>

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
  message: "Order is cancelled"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Data not found"
}
```

_Response (403 - Forbidden)_

```
{
  "message": "Forbidden"
}
```

---

## Global Errors

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

_Response (403 - Forbidden)_

```
{
  "message": "Forbidden"
}
```

_Response (400 - Bad request)_

```
{
  "message": "Access Token Missing"
}
```
