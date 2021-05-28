import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Reservation {
    id: ID!
    name: String!
    hotelName: String
    arrivalDate: String
    departureDate: String
  }
  
  input ReservationInput { 
    name: String
    hotelName: String!
    arrivalDate: String
    departureDate: String
  }
  
  type Query {
    reservations: [Reservation]
    reservation(id: ID!): Reservation!
  }
  
  type Mutation {
    createReservation(reservationInput: ReservationInput): Reservation
    updateReservation(id: ID!, reservationInput: ReservationInput): Reservation!
    deleteReservation(id: ID!): String!
  }
`;

export default typeDefs;
