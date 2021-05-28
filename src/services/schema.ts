import { makeExecutableSchema } from 'graphql-tools';
import ReservationsServiceTypeDefs from './reservations/schema';
import ReservationsServiceResolvers from './reservations/resolvers';

export const schema = makeExecutableSchema({
  typeDefs: ReservationsServiceTypeDefs,
  resolvers: ReservationsServiceResolvers,
});
