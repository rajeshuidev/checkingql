import { gql } from "apollo-angular";

export const GetCheckInDetails = gql`
query{
    checkInDetails{
      bookingCode
      itinerary
      passengers
      contactDetails
    }
  }`