import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import QuestionTab from "../../components/QuestionTab";
import Head from "../../components/Head";

const HelpCenter = () => {
  const location = useLocation();
  return (
    <div className="grid gap-3 p-2">
      <Head title="Help Center" />
      <div className={`grid grid-cols-2 sm:max-w-md py-3`}>
        <Link
          to="/settings/help-center/faq"
          className={`px-4 py-2 border-b-2 text-center ${
            location.pathname === "/settings/help-center/faq"
              ? "border-green-500 text-green-500"
              : ""
          }`}
        >
          FAQ
        </Link>
        <Link
          to="/settings/help-center/contact-us"
          className={`px-4 py-2 border-b-2 text-center ${
            location.pathname === "/settings/help-center/contact-us"
              ? "border-green-500 text-green-500"
              : ""
          }`}
        >
          Contact Us
        </Link>
      </div>
      {location.pathname === "/settings/help-center/faq" ? (
        <div className="grid gap-6">
          <div className="flex items-center gap-3 overflow-x-auto py-5">
            <span className="border border-green-500 px-3 py-1 rounded-full text-green-500">
              General
            </span>
            <span className="border border-green-500 px-3 py-1 rounded-full text-green-500">
              Wallet
            </span>
            <span className="border border-green-500 px-3 py-1 rounded-full text-green-500">
              Account
            </span>
            <span className="border border-green-500 px-3 py-1 rounded-full text-green-500">
              Payment
            </span>
            <span className="border border-green-500 px-3 py-1 rounded-full text-green-500">
              Delivery
            </span>
            <span className="border border-green-500 px-3 py-1 rounded-full text-green-500">
              Questions
            </span>
          </div>
          <input
            type="search"
            name="question"
            placeholder="Search"
            className="p-3 rounded-lg bg-white dark:bg-zinc-700 shadow-xl"
          />
          <div className="grid gap-3">
            {[1, 2, 3, 4, 5, 6].map((__, index) => (
              <QuestionTab key={index} />
            ))}
          </div>
        </div>
      ) : location.pathname === "/settings/help-center/contact-us" ? (
        <div className="grid gap-4">
          <Link
            to="#"
            className="flex items-center gap-6 p-3 rounded-lg shadow-2xl dark:shadow-gray-600 bg-white dark:bg-zinc-700"
          >
            <FontAwesomeIcon
              icon={faHeadphones}
              className="text-xl text-green-500"
            />
            <p className="font-semibold">Customer Support</p>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-6 p-3 rounded-lg shadow-2xl dark:shadow-gray-600 bg-white dark:bg-zinc-700"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl text-green-500"
            />
            <p className="font-semibold">LinkedIn</p>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-5 p-3 rounded-lg shadow-2xl dark:shadow-gray-600 bg-white dark:bg-zinc-700"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-xl text-green-500"
            />
            <p className="font-semibold">Discord</p>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-6 p-3 rounded-lg shadow-2xl dark:shadow-gray-600 bg-white dark:bg-zinc-700"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl text-green-500"
            />
            <p className="font-semibold">Facebook</p>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-6 p-3 rounded-lg shadow-2xl dark:shadow-gray-600 bg-white dark:bg-zinc-700"
          >
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className="text-xl text-green-500"
            />
            <p className="font-semibold">X</p>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-6 p-3 rounded-lg shadow-2xl dark:shadow-gray-600 bg-white dark:bg-zinc-700"
          >
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-xl text-green-500"
            />
            <p className="font-semibold">Instagram</p>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default HelpCenter;
