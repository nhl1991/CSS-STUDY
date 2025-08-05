'use client'
import { Node } from "@/lib/interface";
import { useEffect, useState } from "react";


export default function Display({ node } : { node : Node[]}) {



    const DATA = Array.from({ length: 50 }, (_, i) => i); // 고정된 20개
    const STEP = 4; // 한 번에 보여줄 개수

    const [visibleCount, setVisibleCount] = useState(STEP);

    const showMore = () => {
        setVisibleCount((prev) => Math.min(prev + STEP, DATA.length));
    };
    return (
        <>
            <div className="w-[500px] h-max bg-blue-300 p-2 flex flex-col gap-2">
                {/* Set Initial Data */}
                {node ? node.slice(0, visibleCount).map((item:Node, i:number) => (
                    <div key={i} className="w-full h-[150px] bg-neutral-800 rounded-2xl flex items-center justify-center text-white text-4xl">
                        {item.title}
                    </div>
                )) : null}

            </div>
            {/* When count of current visible data is lower than data.length, show button. */}
            {visibleCount < DATA.length && (
                <button
                    onClick={showMore}
                    className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    더보기
                </button>
            )}
        </>
    )
}