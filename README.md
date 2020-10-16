# back-end

I created the complete backend for this. You can log in as a User or Admin and you'll be able to create classes if you're an Admin. Admins can also edit class info. If you are a User you can get added to the class if you click to join.

https://github.com/bw-anywhere-fitness-june2020/back-end

# Tech Stuff API Endpoints

## User

| Method | Endpoint                                  | Returns                                                         | Parameters                                                                                                     |
| ------ | ----------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |

| GET    | `/api/users`                 | `200` array of items that is posted by logged in user           | Authorization token in the header                                                                              |


## class

| Method | Endpoint         | Returns                                         | Parameters                                                                                                                                           |
| ------ | ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/class`     | `200` with array of items with user information | 
| POST   | `/api/class`     | `201` with the created item object              | Authorization token in the header,         
        `id`,        
        `classname`,
        `type`,
        `start_time`,
        `duration`,
        `intensity_level`,
        `location`,
        `current_number_of_registered_attendees`,
        `max_class_size`, (required), |
| PUT  | `/api/class/:id` | `200` with the updated item object              | Authorization token in the header, same fields as POST request, all optional                                                                         |
| DELETE | `/api/class/:id` | `204` with no content                           | Authorization token in the header                                                                                                                    |

## Authentication

| Method | Endpoint        | Returns                                  | Parameters                                                                                                                               |
| ------ | --------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/auth/register` | `201` with the registered user object    | `username`, `password` 
| POST   | `/api/auth/login`    | `200` with a welcome message and a token | `username` and`password` (required)                                                                                                     |
