import { ApolloError } from "apollo-server-express";
import {Reservation} from './models/Reservation';

const resolvers = {
  Query: {
    reservations: () => {
      return Reservation.find();
    },
    reservation: (_: any, args: any) => {
      return Reservation.findById(args.id);
    },
  },
  Mutation: {
    createReservation: (_: any, args: any) => {
      const reservation = new Reservation(args.reservationInput);
      return reservation.save();
    },
    deleteReservation: (_: any, args: any) => {
      Reservation.findByIdAndRemove(args.id);
      return args.id;
    },
    updateReservation: (_: any, args: any) => {
      return Reservation.findByIdAndUpdate(args.id, args.reservationInput, { new: true });
    }
  }
};

export default resolvers;
