import Head from "../../components/Head";
import NotificationOption from "../../components/notification/Option";
const options = [
  "General Notifications",
  "Special Offers",
  "Promo and Discounts",
  "Payments",
  "New Tips Avaliable",
];
const Notifications = () => {
  return (
    <div className="p-2 grid gap-3">
      <Head title="Notifications" />
      <div className="grid gap-3">
        {options.map((title, index) => (
          <NotificationOption key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
