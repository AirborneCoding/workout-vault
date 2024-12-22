### projects description
Workout Vault is a website where athletes can find programs for them next workouts based on them needs and goals
- only the creator of the website can create the workouts
- visitors only see workouts
- notes : this just simples project for CRUD operations build by nestjs

### Packages 
- @nestjs/config class-transformer class-validator pg cross-env @nestjs/typeorm slugify

### table (Program)
- title
- slug
- image
- category 
- level (begginer, intermediate, advanced)
- duration
- description
- gender (both, men, women)
- workoutPerWeek
- equipments (full gym, no equipments, home minimal)
- interest (full_body, upper_body, lower_body, chest, back, shoulders, arms, abs, cardio, celebrity_workouts)
- program overview
- nutrition overview
- supplement overview
- program plan
- program pdf

### STEPS
1- Create DTOs (Data Transfer Objects): Define DTOs for validation and transferring data between client and server.

2- Create Services: Implement business logic in services that handle CRUD operations (create, read, update, delete) on your entities.

3- Create Controllers: Define REST API endpoints in controllers that map to the CRUD operations in services.

4- Set up Validation: Use libraries like class-validator to validate the incoming data through DTOs.

5- Set up Routing and Middleware: Configure any necessary routes and middleware (e.g., for logging, authentication).

6- Test the API: Use tools like Postman or Insomnia to test your API endpoints.

7- Handle Errors: Implement proper error handling and responses for a robust API.

8- Configure Security (Optional): Set up JWT authentication, CORS, or other security features if needed.