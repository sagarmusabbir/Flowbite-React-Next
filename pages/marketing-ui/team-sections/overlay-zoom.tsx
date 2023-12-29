import { Button } from "flowbite-react";
import type { FC } from "react";

const OverlayCardsWithZoomEffectTeamSection: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row xl:items-start">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our people make us great
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Here we focus on markets where technology, innovation, can unlock
              long-term value.
            </p>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              You'll interact with talented professionals, will be challenged to
              solve difficult problems and think in new and creative ways.
            </p>
            <div className="mt-4">
              <Button href="#" className="w-fit [&>span]:items-center">
                View more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 xl:max-w-3xl shrink-0 sm:grid-cols-2 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Robert Brown</p>
                  <p className="text-base font-medium text-gray-300">
                    CEO &amp; Co-Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-2.png"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Leslie Livingston
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    CTO &amp; Co-Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-3.png"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Joseph McFall</p>
                  <p className="text-base font-medium text-gray-300">
                    Front-end Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-5.png"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Thom Belly</p>
                  <p className="text-base font-medium text-gray-300">
                    Front-end Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-6.png"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Bonnie Green</p>
                  <p className="text-base font-medium text-gray-300">
                    React Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-7.png"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Lana Byrd</p>
                  <p className="text-base font-medium text-gray-300">
                    Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverlayCardsWithZoomEffectTeamSection;
