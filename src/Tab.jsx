function Tab({ nameOf }) {
  return (
    <div className="flex h-full grow items-center justify-center rounded border border-slate-800 hover:cursor-pointer hover:bg-sky-300 hover:text-slate-800">
      {nameOf}
    </div>
  );
}

export default Tab;
