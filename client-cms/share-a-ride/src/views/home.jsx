
import logo from "../assets/logo-no-background.png";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-blue-900">
      <div className="mx-auto max-w-lg">
        {/* <div className="flex justify-center mb-8">
          <img src={logo} alt="Share-a-Ride Logo" className="h-16" />
        </div> */}

        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Welcome to the Share-a-Ride CMS!
        </h1>

        <p className="text-center text-white text-lg mt-4">
          Manage your ridesharing platform with ease using our powerful and intuitive content management system.
        </p>

        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
