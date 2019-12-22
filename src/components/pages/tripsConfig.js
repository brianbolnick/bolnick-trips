export const disneyland20 = {
  name: "Disneyland 2020",
  route: "/disneyland20",
  coverImage:
    "https://wdwprepschool.com/wp-content/uploads/IMG_2319-e1560962880401.jpg",
  dates: "1/19/20 - 1/26/20",
  description: "Road trip stopping in Vegas on the way. Thanks Podium!",
  itinerary: [
    {
      name: "Day 1",
      date: "1/19/20",
      activities: [
        {
          type: "food",
          name: "Breakfast",
          startTime: "7:30 am",
          endTime: "8:00 am",
          restaurant: "McDonald's",
          location: "Saratoga Springs",
          estimatedCost: 20
        },
        {
          type: "transportation",
          to: "Beaver, UT",
          startTime: "8:00 am",
          endTime: "10:30 am"
        },
        {
          type: "fuel",
          location: "Beaver, UT",
          startTime: "10:30 am",
          endTime: "11:00 am",
          estimatedCost: 50
        },
        {
          type: "transportation",
          to: "St. George, UT",
          startTime: "11:00 am",
          endTime: "12:30 pm"
        },
        {
          type: "food",
          name: "Lunch",
          startTime: "12:30 pm",
          endTime: "1:30 pm",
          restuarant: "TBD",
          location: "St. Georege, UT",
          estimatedCost: 30
        },
        {
          type: "transportation",
          to: "Las Vegas, NV",
          startTime: "1:00 pm",
          endTime: "3:30 pm"
        },
        {
          type: "lodging",
          location: "Las Vegas,",
          hotelName: "Excalibur",
          estimatedCost: 150
        },
        {
          type: "food",
          name: "Dinner",
          startTime: "6:00 pm",
          endTime: "7:30 pm",
          restuarant: "TBD",
          location: "Las Vegas, NV",
          estimatedCost: 50
        }
      ]
    },
    {
      name: "Day 2",
      date: "1/19/20",
      activities: [
        {
          type: "food",
          name: "Breakfast",
          startTime: "7:30 am",
          endTime: "8:00 am",
          restaurant: "McDonald's",
          location: "Saratoga Springs",
          estimatedCost: 20
        },
        {
          type: "transportation",
          to: "Beaver, UT",
          startTime: "8:00 am",
          endTime: "10:30 am"
        },
        {
          type: "fuel",
          location: "Beaver, UT",
          startTime: "10:30 am",
          endTime: "11:00 am",
          estimatedCost: 50
        },
        {
          type: "transportation",
          to: "St. George, UT",
          startTime: "11:00 am",
          endTime: "12:30 pm"
        },
        {
          type: "food",
          name: "Lunch",
          startTime: "12:30 pm",
          endTime: "1:30 pm",
          restuarant: "TBD",
          location: "St. Georege, UT",
          estimatedCost: 30
        },
        {
          type: "transportation",
          to: "Las Vegas, NV",
          startTime: "1:00 pm",
          endTime: "3:30 pm"
        },
        {
          type: "lodging",
          location: "Las Vegas,",
          hotelName: "Excalibur",
          estimatedCost: 150
        },
        {
          type: "food",
          name: "Dinner",
          startTime: "6:00 pm",
          endTime: "7:30 pm",
          restuarant: "TBD",
          location: "Las Vegas, NV",
          estimatedCost: 50
        }
      ]
    }
  ],
  budget: {}
};

export const europe18 = {
  name: "Europe 2018",
  link: "//our-europe-trip.herokuapp.com",
  coverImage:
    "https://www.history.com/.image/t_share/MTU3ODc4NjAyOTg0NDY2MTQz/image-placeholder-title.jpg",
  dates: "8/11/18 - 8/22/18",
  description: "Ireland, England, France",
  itinerary: [],
  budget: {}
};

export default [disneyland20, europe18];
