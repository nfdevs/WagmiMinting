import React from "react";

const data = [
  {
    image: "/Amusvision-StillInside.jpg",
    name: "Amusvision",
  },
  {
    image: "/Avaaj-Stillness.jpg",
    name: "Avaaj",
  },
  {
    image: "/Bhare-guidemefromapathy.png",
    name: "Bhare",
  },
  {
    image: "/Bushra-Khan-Hope.jpg",
    name: "Bushra Khan",
  },
  {
    image: "/GabrielCruz-Helpless.png",
    name: "Gabriel Cruz",
  },
  {
    image: "/LilMahnaji-FindingSafety.jpg",
    name: "Lil Mahnaji",
  },
  {
    image: "/Mediolanum-Resilience.PNG",
    name: "Mediolanum",
  },
  {
    image: "/Nasscart-Persevere.JPEG",
    name: "Nasscart",
  },
];

const OurArtist = () => {
  return (
    <section className="">
      <div className="p-5">
        <div className="grid gap-4 mt-2 grid-cols-2 xl:grid-cols-4">
          {data.map((item, index) => (
            <div className="w-full max-w-xs text-center" key={index}>
              <img
                className="object-cover object-center w-48 h-48 mx-auto rounded-lg"
                src={item.image}
                alt={item.name}
              />

              <div className="mt-2">
                <h3 className="text-lg font-Roboto text-gray-700 dark:text-gray-200">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurArtist;
