
# Hotel Artemis

This is a quick draft of a server-side application that manages hotel reservations via GraphQL based API in a very simplistic manner.


# Architectural considerations

### Project structure

Source files under `src` folder are organized in a modular fashion with allows to easily add more service definitions
in the future to extend the API.

### Main Components

- Node.js - a JavaScript runtime
- Apollo Server - spec-compliant GraphQL server
- GraphQL - a query language support
- MongoDB - NoSQL database


# Local development

To run app locally, make sure to install all dependencies:
```
npm install
```
Run the application on a simulator.
```
npm run start:dev
```
Access GraphQL playground:
```
http://localhost:5000/graphql
```

# Testing

Automated e2e testing covers use cases to unsure integrity of the service. 


# Ways to improve/Known issues

- Add authentication
- Add error handling


# Query/Mutation References
```
query{
  reservations{
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}

query{
  reservation(id: "60b07e79961e4403ff9971ba") {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}

mutation {
  createReservation(
    reservationInput: {
      name: "John Smith"
      hotelName: "Artemis"
      arrivalDate: "2021-06-02T08:00:00.000Z"
      departureDate: "2021-06-06T08:00:00.000Z"
  	}
  ) {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}

mutation {
  updateReservation(
    id: "60b06de302e8b002a5be5e55",
    reservationInput: {
      name: "John Smith Jr"
      hotelName: "Artemis"
      arrivalDate: "2021-05-25T08:00:00.000Z"
      departureDate: "2021-05-26T08:00:00.000Z"
    }
  ) {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}

mutation {
  deleteReservation(id: "60b07e79961e4403ff9971ba")
}
```
