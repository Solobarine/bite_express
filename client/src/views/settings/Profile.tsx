import Head from "../../components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useFormik } from "formik";

const Profile = () => {
  const { data } = useSelector((state: RootState) => state.auth.user);

  const { values, handleChange } = useFormik({
    initialValues: {
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      gender: data?.gender,
      nationality: data?.nationality,
      date_of_birth: data?.date_of_birth,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(data, values);
  return (
    <div className="p-2 grid gap-3">
      <Head title={"Profile"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative w-fit mx-auto sm:mx-0 mb-5 sm:col-span-2">
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
          name="first_name"
          onChange={handleChange}
          value={values.first_name}
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="Enter First Name"
        />
        <input
          type="text"
          name="last_name"
          onChange={handleChange}
          value={values.last_name}
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="Enter Last Name"
        />
        <input
          type="date"
          name="date_of_birth"
          onChange={handleChange}
          value={values.date_of_birth}
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
        />
        <select
          name="gender"
          id="gender"
          onChange={handleChange}
          value={values.gender}
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="Enter Email"
        />
        <input
          type="text"
          name="phoneNo"
          onChange={handleChange}
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
          placeholder="e.g +222 000 000 0000"
        />
        <select
          name="nationality"
          onChange={handleChange}
          value={values.nationality}
          className="text-sm p-2 rounded-lg outline-green-500 border border-green-500 shadow-md bg-white dark:bg-zinc-700"
        >
          <option value="">Select Nationality</option>
        </select>
        <button
          type="submit"
          className="py-3 rounded-full text-white bg-green-500 col-start-1"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Profile;
