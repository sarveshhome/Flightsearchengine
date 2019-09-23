import { Flights } from './flights';
import { BookingInformation } from './booking-info';

export interface SearchResponse {
    oneWayFlights: Flights[];
    returningFlights?: Flights[];
    oneway: boolean;
    bookingInfo: BookingInformation;
};
