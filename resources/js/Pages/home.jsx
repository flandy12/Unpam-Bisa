import React from "react";
import { Head } from "@inertiajs/inertia-react";

import Background from "../../asset/bg1.jpg";

var sectionStyle = {
    width: "100%",
    height: "610px",
    backgroundSize: "cover",
    backgroundImage: `url(${Background})`,
};

export default function HomePage() {
    return (
        <>
            <div className="relative justify-center bg-slate-50">
                <div
                    className="px-5 text-black absolute left-0 right-0 grid place-items-center "
                    style={sectionStyle}
                >
                    <div className="flex flex-col w-[600px]  space-y-2 bg-white p-5 rounded border">
                        <h1 className="font-semibold text-4xl">
                            Edusite Free Online Training Courses
                        </h1>
                        <p>
                            Libris vivendo eloquentiam ex ius, nec id splendide
                            abhorreant, eu pro alii error homero.
                        </p>

                        <button className="bg-blue-600 px-5 py-2.5 rounded-lg w-[200px] text-white">
                            Get Started !
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
