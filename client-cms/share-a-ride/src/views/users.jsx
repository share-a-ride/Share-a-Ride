import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/actionCreator";


export default function VerifiedUsersPage() {
  // const [selectedUser, setSelectedUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const { user, userLoading } = useSelector((state) => {
    return state.usersReducer
  });

  const verifiedUsers = user
  const loading = userLoading;

  const handleEditUser = (user) => {
    //TODO
  };

  const handleBanUser = () => {
    //TODO
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000); // Change the time to adjust how long the loading effect will last
    // return () => clearTimeout(timer);
    dispatch(fetchUser())
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-blue-900">
      {/* {isLoading ? (
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Loading ...
        </h1>
      ) : ( */}
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Verified Users
          </h1>
          <table className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-400 text-white text-sm font-medium uppercase tracking-wide">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Rating</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {verifiedUsers.map((user) => (
                <tr key={user.id}>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phoneNumber}</td>
                  <td className="p-2">{user.rating}</td>
                  <td className="p-2 flex space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleEditUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleBanUser(user)}
                    >
                      Ban
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* {selectedUser && (
          <UserModal user={selectedUser} onClose={handleCloseModal} />
        )} */}
        </div>
      {/* )} */}
    </div>
  );
}
