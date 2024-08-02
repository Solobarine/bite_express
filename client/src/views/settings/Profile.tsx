import Head from "../../components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="p-2 grid gap-3">
      <Head title={"Profile"} />
      <div className="grid gap-4">
        <div className="relative w-fit mx-auto sm:mx-0 mb-5">
          <img
            src="#"
            alt=""
            className="w-32 aspect-square rounded-full bg-gray-300"
          />
          <button className="absolute bottom-0 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-md">
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
        <input
          type="text"
          name="firstName"
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="Enter First Name"
        />
        <input
          type="text"
          name="lastName"
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="Enter Last Name"
        />
        <input
          type="date"
          name="dateOfBirth"
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
        />
        <select
          name="sex"
          id="sex"
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          name="email"
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="Enter Email"
        />
        <input
          type="text"
          name="phoneNo"
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="e.g +222 000 000 0000"
        />
        <select
          name="country"
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
        >
          <option value="">Select Country</option>
        </select>
        <button
          type="submit"
          className="py-3 rounded-full text-white bg-green-500"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Profile;
