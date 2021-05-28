import {model, Schema, Model, Document} from 'mongoose';

interface IReservation extends Document {
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

const ReservationSchema: Schema = new Schema({
  name: {type: String},
  hotelName: {type: String, required: true},
  arrivalDate: {type: String, required: true},
  departureDate: {type: String, required: true}
});

export const Reservation: Model<IReservation> = model('Reservation', ReservationSchema);
