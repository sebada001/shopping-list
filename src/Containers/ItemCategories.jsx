function ItemCategories({ types, setCurrentType }) {
  return (
    <div>
      <div className="m-4 flex flex-row flex-wrap items-center justify-start ">
        {types.map((t) => {
          return (
            <div
              key={t}
              className="mx-2 my-1 rounded-md bg-slate-100 p-2 hover:cursor-pointer hover:bg-slate-400"
              onClick={() => setCurrentType(t)}
            >
              {t}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ItemCategories;
