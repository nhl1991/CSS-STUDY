import Link from "next/link";

export default function Page() {
  return (
    <main className="w-screen h-screen p-12 flex flex-col gap-y-8 items-center justify-center">
      <header>
        <h1 className="text-[clamp(4rem,3rem+3vw,10rem)]">このサイトは</h1>
        <p className="text-[clamp(1rem,1.5rem+1vw,4rem)]">個人的にリラックスしながら作りたいことを作ってアップロードしています。</p>

      </header>
      
      <div>
        <ul className="md:max-w-96 w-full flex flex-row flex-wrap">
          <li>
            <Link className="" href={"/boxsizing"}>
              BOX-SIZING
            </Link>
          </li>
          <li>
            <Link className="" href={"/viewport-unit"}>
              Viewport Unit
            </Link>
          </li>

          <li>
            <Link className="" href={"/grid"}>
              GRID-LAYOUT
            </Link>
          </li>
          <li>
            <Link className="" href={"/clamp"}>
              clamp
            </Link>
          </li>
          <li>
            <Link className="" href={"/lp-example-01"}>
              lp-example-01
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
