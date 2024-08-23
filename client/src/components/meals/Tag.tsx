const Tag = ({ name }: { name: string; quantity?: string }) => {
  return (
    <div className="rounded-full px-2 py-0.5 border border-green-600 flex items-center gap-3">
      <p>{name}</p>
      <button className="text-xl font-semibold hover:text-red-500">
        &times;
      </button>
    </div>
  );
};

export default Tag;
