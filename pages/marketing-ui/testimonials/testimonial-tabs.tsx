import { Avatar, Tabs } from "flowbite-react";
import type { FC } from "react";

const TestimonialTabs: FC = function () {
  return (
    <Tabs.Group
      style="pills"
      theme={{
        base: "gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-[300px_1fr] lg:py-16 lg:px-6",
        tablist: {
          base: "block mb-3 space-y-4 sm:flex sm:space-y-0 lg:space-y-4 lg:block",
          styles: {
            pills:
              "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400",
          },
          tabitem: {
            base: "w-full p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-gray-700 focus:outline-none",
            styles: {
              pills: {
                active: {
                  on: "rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800",
                  off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white text-gray-800",
                },
              },
            },
          },
        },
        tabpanel: "p-4",
      }}
    >
      <Tabs.Item
        active
        title={
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <Avatar
                img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                rounded
                size="xs"
              />
              <p className="text-xl font-bold dark:text-white">Michael Gough</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Web developer at Google</p>
          </div>
        }
      >
        <svg
          className="mb-3 h-8 text-gray-500 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          It was a great experience!
        </h3>
        <p className="mb-3 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application.
        </p>
        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          There is absolutely no doubt in my mind that without Flowbite, I would
          not have been able to make the jump to Ueno, a digital agency I
          started in 2014. The work I got through Flowbite made it possible for
          me to have something to build on. We now have about 45 people on our
          team, a lot of whom we found and recruited through Flowbite.
        </p>
      </Tabs.Item>
      <Tabs.Item
        active
        title={
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <Avatar
                img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                rounded
                size="xs"
              />
              <p className="text-xl font-bold dark:text-white">Bonnie Green</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">CEO at Facebook</p>
          </div>
        }
      >
        <svg
          className="mb-3 h-8 text-gray-500 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Best product!
        </h3>
        <p className="mb-3 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application.
        </p>
        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          I would not have been able to make the jump to Ueno, a digital agency
          I started in 2014. The work I got through Flowbite made it possible
          for me to have something to build on. We now have about 45 people on
          our team, a lot of whom we found and recruited through Flowbite.
        </p>
      </Tabs.Item>
      <Tabs.Item
        active
        title={
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <Avatar
                img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                rounded
                size="xs"
              />
              <p className="text-xl font-bold dark:text-white">Lana Byrd</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">CTO at Microsoft</p>
          </div>
        }
      >
        <svg
          className="mb-3 h-8 text-gray-500 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Great design!
        </h3>
        <p className="mb-3 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application.
        </p>
        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          There is absolutely no doubt in my mind that without Flowbite, I would
          not have been able to make the jump to Ueno, a digital agency I
          started in 2014. The work I got through Flowbite made it possible for
          me to have something to build on. We now have about 45 people on our
          team, a lot of whom we found and recruited through Flowbite.
        </p>
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default TestimonialTabs;
