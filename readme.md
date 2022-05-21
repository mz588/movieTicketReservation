# Movie Ticket Reservation

## Intro

A movie ticket reservation platform.

![](/Users/zhengmingkai/Desktop/dc_proj/movieTicketReservation/screenshots/HomePage.png)

### Functionalities

1. Signup.
   
   ![](/Users/zhengmingkai/Desktop/dc_proj/movieTicketReservation/screenshots/signup.png)

2. Login
   
   ![](/Users/zhengmingkai/Desktop/dc_proj/movieTicketReservation/screenshots/login.png)

3. Reserve currently playing movies.
   
   ![](/Users/zhengmingkai/Desktop/dc_proj/movieTicketReservation/screenshots/reserve.png)

4. Check reservation history.
   
   ![](/Users/zhengmingkai/Desktop/dc_proj/movieTicketReservation/screenshots/Dashboard.png)

5. Search by the movie title.
   
   ![](/Users/zhengmingkai/Desktop/dc_proj/movieTicketReservation/screenshots/Search.png)

### Frameworks

1. Frontend webpage: ReactJS
2. Load-balancing: Envoy proxy
3. Microservices communication: gRPC
4. Microservices container: Docker
5. Backend database: MongoDB

## Installation Guide

```
$ cd movieTicketReservation
$ docker-compose build
$ docker-compose up
```

After installation, go to the URL: `http://localhost:3000/`.