import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserModal from "../components/verificationModal";
import { fetchUser,changeUserStatus } from "../store/actions/actionCreator";

export default function UnverifiedUserList() {
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "Andi Susanto",
  //     email: "andisusanto@contoh.com",
  //     password: "sandikupassword",
  //     phoneNumber: "555-1234",
  //     photo:
  //       "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  //     idCardImage:
  //       "https://media.istockphoto.com/id/813581282/photo/face-detection-and-recognition-of-man-computer-vision-and-machine-learning-concept.jpg?s=612x612&w=0&k=20&c=NoRoSp7n38vNPduP3KtvWWjwd0H7QMXQcT0hCSbVvwo=",
  //     rating: 4.5,
  //     status: "unverified",
  //   },
  //   {
  //     id: 2,
  //     name: "Budi Cahyono",
  //     email: "budicahyono@contoh.com",
  //     password: "rahasiaku",
  //     phoneNumber: "555-5678",
  //     photo: "https://contoh.com/budicahyono.png",
  //     idCardImage: "https://contoh.com/budicahyono-id.png",
  //     rating: 3.5,
  //     status: "unverified",
  //   },
  // ]);

  const dispatch = useDispatch()
  const navigate =useNavigate()
  const {user,userLoading} = useSelector((state)=>{
    return state.usersReducer
  })

  console.log(user,"<<<<ini dai user")

  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewIdAndPhoto = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };


  const handleVerifyUser = (user) => {
    // TODO: Update the user's status to "verified"
    dispatch(changeUserStatus("verify",user.id))
    console.log(`Verifying user: ${user.id}`);
    navigate("/unverified-users")
  };

  const handleRejectUser = (user) => {
    // TODO: Send email to the user about their rejected verification
    dispatch(changeUserStatus("rejected",user.id))
    console.log(`Rejecting user: ${user.name}`);
  };

  useEffect(() => {
    dispatch(fetchUser())
  }, []);


  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-blue-900">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Unverified Users
        </h1>
        <div className="flex justify-center mt-6">
          <table className="bg-white rounded-lg shadow-lg overflow-hidden">
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
              {
              userLoading ?
              <div>Loading......................</div> 
             : user.filter((user) => user.status === "unverified")
                .map((user) => (
                  <tr key={user.id}>
                    <td className="p-2">{user.name} {user.status}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.phoneNumber}</td>
                    <td className="p-2">{user.rating}</td>
                    <td className="p-2 flex space-x-2">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleViewIdAndPhoto(user)}
                      >
                        View
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleVerifyUser(user)}
                      >
                        Verify
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleRejectUser(user)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {selectedUser && (
          <UserModal user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}
