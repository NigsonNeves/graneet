# Graneet

## Installation

To start the project you only need to run this docker command

```bash
docker-compose up
```

### Front

Front will be running on port 3000 from your local machine : [Front](https://localhost:3000)

### API

API will be running on port 4000 from your local machine : [https://localhost:4000](https://localhost:4000)

#### City Route

GET /cities => To get all the cities from the database  
GET /cities/findByFilter?query={your_query} => To get cities that match a query 
