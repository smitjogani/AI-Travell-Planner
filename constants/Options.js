export const SelectTravelleList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole travels in exploration',
        icon: '🛩',
        people: '1 People'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adeventure',
        icon: '🏡',
        people: '3+ People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '⛵',
        people: '2+ People'
    }
]

export const selectBudgetList = [
    {
        id:1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵'
    },
    {
        id:2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰'
    },
    {
        id:3,
        title: 'Luxury',
        desc: "Don't worry about costs",
        icon: '💸'
    },
]

export const AI_PROMPT = 'Generate Travel Plan for trip from pune to {location}, for {totalDays} Days and {totalNights} Night for {traveler} with a {budget} Budget with a Flight details, Flight Price with Booking url, Hotels Options List with HotelName, Hotels Address , Price, Hotel Image url, Geo Coordinates, Rating, Description and Place to Visit nearby Placename, Place Details, Place image url, Geo Coordinates, ticket pricing , Time to travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON formate and all costs in indian rupees.';