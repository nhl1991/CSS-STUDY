'use client'

import { useBearStore } from "./store";

export default function Home() {

  const Bears = useBearStore((state) => state.bears);
  const setBears: () => void = useBearStore((state) => state.increase);
  function onClickHanlder() {

    setBears();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="border-1 rounded border-dotted w-full h-48 bg-slate-100">
          <h1 className="inline w-16 h-32">{Bears}</h1>
          <button className="inline w-16 h-32" type="button" onClick={onClickHanlder} >+</button>

      </div>
    </div>
  );
}
