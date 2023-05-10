import { FaCarSide } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

export default function DetailsRideModal({ ride, onClose }) {
  // console.log(ride)
  return (

    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              
              <div className="mt-3 text-center sm:mt-0 sm:mx-4 sm:mr-6 sm:text-left w-full">
                <div className="flex flex-row space-x-4 items-center">
                  <div className="bg-slate-200 w-20 h-20 rounded-full">
                    
                  </div>
                  <div>
                    <h3 className="text-2xl leading-6 font-medium text-gray-900 mb-1">
                      {ride.UserRides[0].User.name}
                    </h3>
                    <h5 className="text-sm font-sans ">Rating: {ride.UserRides[0].User.rating} / 5</h5>
                  </div>
                </div>

                <div className="bg-slate-100 flex flex-row w-full mx-4  justify-between mt-4 py-2 px-4">
                  <div className="flex flex-col items-center">
                    <h3>{ride.startLocation}</h3>
                    <h3>{ride.departureTime}</h3>
                    <div className="bg-slate-600 w-1 h-20 "></div>
                    <h3>{ride.startLocation}</h3>
                    <h3>{ride.departureTime}</h3>
                  </div>
                  <div className="">
                    <h3>Rp. {ride.price}</h3>
                  </div>
                  
                </div>

                <div className="bg-slate-100 flex flex-col w-full mx-4  justify-between mt-4 py-2 px-4">
                    <h4 className="font-serif">Info Pengemudi dan Kendaraan</h4>
                  <div className='flex flex-row space-x-4 items-center mt-2'>
                    <FaCarSide/>
                      <h4>Avanza</h4>
                  </div>
                  <div className='flex flex-row space-x-4 items-center mt-2'>
                    <FiPhoneCall/>
                      <h4>{ride.UserRides[0].User.phoneNumber}</h4>
                  </div>

                </div>
              
                <div className="bg-slate-100 flex flex-col w-full mx-4  justify-between mt-4 py-2 px-4">
                  <div className='flex flex-row space-x-4 items-center mt-2 justify-between'>
                    <h4 className="font-serif">Info Penumpang</h4>
                    <h4 className="font-sans">seats: {ride.seats}</h4>
                  </div>
                  {
                    ride.UserRides.filter(data => data.status !== "creator").
                    map((data,idx)=>(
                      
                    <div className='flex flex-row space-x-3'>
                        <div>{idx+1}. </div>
                        <div>{data.User.name}</div>
                    </div>
                    ))
                  }

                </div>
              
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
