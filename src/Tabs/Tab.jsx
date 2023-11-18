function Tab({ nameOf, handleTabSelection, keyId, selectionCheck }) {
  // style of tab if it's selected
  const style = {
    divClass:
      "flex h-full grow items-center justify-center rounded border border-slate-800 hover:cursor-pointer hover:bg-sky-300 hover:text-slate-800",
  };
  if (selectionCheck) {
    style.divClass =
      "flex h-full grow items-center justify-center rounded border border-slate-800 hover:text-slate-800 bg-sky-200 text-slate-900";
  }
  return (
    <div onClick={() => handleTabSelection(keyId)} className={style.divClass}>
      {nameOf}
    </div>
  );
}

export default Tab;
