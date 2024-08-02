const TopUp = () => {
  return (
    <div className="p-2 grid gap-3">
      <h3 className="text-xl font-semibold">Top-Up Wallet</h3>
      <div className="p-4">
        <div className="grid gap-3">
          <label htmlFor="amount">Enter Top Up Amount</label>
          <input
            type="text"
            name="amount"
            className="border border-green-500 text-center text-5xl min-w-0 py-6 font-bold rounded-3xl outline-1 outline-green-500 bg-white dark:bg-zinc-700"
          />
          <div className="mt-4 grid grid-cols-3 gap-3 p-2">
            {[10, 20, 50, 100, 200, 250, 500, 750, 1000].map((value, index) => (
              <button
                key={index}
                className="px-2 py-1 text-green-500 border border-green-500 rounded-full"
              >
                ${value}
              </button>
            ))}
          </div>
          <button className="rounded-full py-3 bg-green-500 text-white text-sm">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
