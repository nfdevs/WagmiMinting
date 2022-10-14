import React from "react";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <section class="text-white bg-zinc-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed font-Raleway text-lg">
              Recently, Pakistan and Puerto Rico have both faced catastrophe due
              to multiple causes.In Pakistan, flash flooding throughout the
              summer has left one third of the country under water and displaced
              approximately 33 million people. In Puerto Rico, the country is
              yet to recover from Hurricane Fiona’s destruction to
              infrastructure and power
            </p>
            <p class="leading-relaxed font-Raleway mt-2 text-lg">
              The art and artists in this charity NFT collective aim to raise
              awareness about the happenings in these two countries and funds to
              help with relief efforts.
            </p>
            <p class="leading-relaxed mt-2 font-Raleway text-lg">
              This is an open mint where supporters of the cause can donate any
              amount in order to mint artworks.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-yellow-300 mt-8 mb-6"></span>
            <h2 class="text-zinc-100 font-Roboto title-font tracking-wider text-xl">
              Pakistan & Puerto Rico Charity Collective
            </h2>
            <div className="flex justify-center items-center flex-col mt-2">
              <p class="flex items-center text-zinc-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Open Editions
              </p>
              <p class="flex items-center text-zinc-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Donation Based Mint
              </p>
              <p class="flex items-center text-zinc-400 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                100% To Charity
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <h2 class="title-font font-Roboto text-3xl">
                      50% to Save Pakistan
                    </h2>
                  </div>
                </div>
                <div class="p-4 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <h2 class="title-font font-Roboto text-3xl">
                      50% to Taller Salud
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
