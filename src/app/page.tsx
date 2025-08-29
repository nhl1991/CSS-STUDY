import Link from "next/link";

export default function Page() {



    return (
        <div className="w-screen h-screen p-12 flex items-center justify-center">
            <ul className="flex flex-row">
                <li>
                    <Link className="" href={'/boxsizing'}>BOX-SIZING</Link>
                </li>
                <li>
                    <Link className="" href={'/viewport-unit'}>Viewport Unit</Link>
                </li>

                <li>
                    <Link className="" href={'/grid'}>GRID-LAYOUT</Link>
                </li>
                <li>
                    <Link className="" href={'/clamp'}>clamp</Link>
                </li>
            </ul>
        </div>
    )
}