import Link from "next/link";
import React from "react";

const data = [
  {
    image: "/Amusvision-StillInside.jpg",
    name: "Amusvision",
    handle: "https://twitter.com/amusvision",
  },
  {
    image: "/Avaaj-Stillness.jpg",
    name: "Avaaj",
    handle: "https://twitter.com/avaaj6",
  },
  {
    image: "/Bhare-guidemefromapathy.png",
    name: "Bhare",
    handle: "https://twitter.com/BHAREBOY",
  },
  {
    image: "/Bushra-Khan-Hope.jpg",
    name: "Bushra Khan",
    handle: "https://twitter.com/bkhan___",
  },
  {
    image: "/GabrielCruz-Helpless.png",
    name: "gaCruzing",
    handle: "https://twitter.com/gacruzing",
  },
  {
    image: "/LilMahnaji-FindingSafety.jpg",
    name: "Lil Mahnaji",
    handle: "https://twitter.com/lilmahnaji",
  },
  {
    image: "/Mediolanum-Resilience.PNG",
    name: "Mediolanum",
    handle: "https://twitter.com/mediolanum666",
  },
  {
    image: "/Nasscart-Persevere.JPEG",
    name: "Nasscart",
    handle: "https://twitter.com/NasimEllahi",
  },
  {
    image: "/Raz.gif",
    name: "RazDoesArt",
    handle: "https://twitter.com/razDoesArt",
  },
];

const OurArtist = () => {
  return (
    <section className="">
      <div className="p-5">
        <div className="grid gap-4 mt-2 grid-cols-3 xl:grid-cols-3">
          {data.map((item, index) => (
            <Link href={item.handle} key={index}>
              <a className="w-full max-w-xs text-center">
                <img
                  className="object-cover object-center w-48 h-48 mx-auto"
                  src={item.image}
                  alt={item.name}
                />

                <div className="mt-2">
                  <h3 className="lg:text-lg text-sm font-Roboto text-gray-700 dark:text-gray-200">
                    {item.name}
                  </h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurArtist;
