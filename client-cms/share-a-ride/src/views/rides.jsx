import { useState } from "react";

const rides = [
  {
    startLocation: "Jakarta",
    destination: "Bandung",
    departureTime: "2023-05-10 10:00:00",
    arrivalTime: "2023-05-10 13:00:00",
    price: 75000,
    vehicleId: 1,
    user: {
      name: "Andi Susanto",
      email: "andisusanto@contoh.com",
      phoneNumber: "555-1234",
      photo: "https://contoh.com/andisusanto.png",
      rating: 4.5,
    },
  },

  // add more ride objects here
];

export default function RidesList() {
  const [selectedRide, setSelectedRide] = useState(null);

  const handleViewRide = (ride) => {
    setSelectedRide(ride);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-blue-900">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Rides List
        </h1>
        <table className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-400 text-white text-sm font-medium uppercase tracking-wide">
              <th className="p-2">User</th>
              <th className="p-2">Start Location</th>
              <th className="p-2">Destination</th>
              <th className="p-2">Departure Time</th>
              <th className="p-2">Price</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td className="p-2">{ride.user.name}</td>
                <td className="p-2">{ride.startLocation}</td>
                <td className="p-2">{ride.destination}</td>
                <td className="p-2">{ride.departureTime}</td>
                <td className="p-2">{ride.price}</td>
                <td className="p-2">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleViewRide(ride)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {selectedRide && (
          <RideModal ride={selectedRide} onClose={handleCloseModal} />
        )} */}
      </div>
    </div>
  );
}
