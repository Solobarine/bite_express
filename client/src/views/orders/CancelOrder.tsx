import { useNavigate } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CancelOrderPopup from "../../components/popups/CancelOrder";
import { useState } from "react";
import { orderCancellationReasons } from "../../data";

const CancelOrder = () => {
  const navigate = useNavigate();
  const [cancel, setCancel] = useState(false);
  return (
    <>
      <div className="grid p-2 gap-3">
        <div className="flex items-start gap-3">
          <button onClick={() => navigate(-1)} className="p-0">
            <FontAwesomeIcon icon={faArrowLeftLong} className="p-2" />
          </button>
          <h3 className="text-xl font-semibold">Cancel Order</h3>
        </div>
        <hr />
        <p>Please select the reason for cancellation</p>
        <div className="mt-4 grid gap-2">
          {orderCancellationReasons.map((reason, index) => (
            <span key={index} className="py-2 flex items-center gap-2">
              <input type="radio" name="reason" className="accent-green-500" />
              <p>{reason}</p>
            </span>
          ))}
        </div>
        <div className="grid gap-2">
          <label htmlFor="reason">Other</label>
          <textarea
            name="reason"
            id="reason"
            className="min-h-20 border border-green-500 outline-green-500 rounded-2xl p-2"
            placeholder="Other Reason"
          ></textarea>
        </div>
        <button
          className="rounded-full py-2 text-white text-sm bg-green-500"
          onClick={() => setCancel(true)}
        >
          Continue
        </button>
      </div>
      {cancel && <CancelOrderPopup />}
    </>
  );
};

export default CancelOrder;
