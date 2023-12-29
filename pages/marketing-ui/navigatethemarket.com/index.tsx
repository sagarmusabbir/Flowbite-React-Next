import type { FC } from "react";

import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

import MegaMenuHeader from "./navbar";
import DefaultHero from "./hero";
import DefaultPricingTable from "./block";
import DefaultFooterSection from "./footer";


const AllHeaders: FC = function () {
  return (
    <>
      <BlockPageBreadcrumb
        title="Header"
        description="Get started with the header component for the navigation of a website featuring multi-level dropdowns, mega-menus, search bars, language selectors, and more."
      />
     
     
     
      
      
     
      <BlockSection
        title="Header with mega menu"
        description="This advanced example of a mega-menu navbar can be used to showcase multiple layers of menu items and website page categories."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/search.tsx"
      >
        <MegaMenuHeader />
      </BlockSection>
      <BlockSection
        title="Header with user dropdown"
        description="This is a great example if you want to show the avatar of a logged-in website visitor and a choice of pages relevant to the administration of their account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/user-dropdown.tsx"
      >
        <DefaultHero />
      </BlockSection>
      
      <BlockSection
        title="Header with user dropdown"
        description="This is a great example if you want to show the avatar of a logged-in website visitor and a choice of pages relevant to the administration of their account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/user-dropdown.tsx"
      >
        <DefaultHero />
      </BlockSection>

      <BlockSection
        title="Header with user dropdown"
        description="This is a great example if you want to show the avatar of a logged-in website visitor and a choice of pages relevant to the administration of their account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/user-dropdown.tsx"
      >
        <DefaultPricingTable/>
      </BlockSection>

      <BlockSection
        title="Header with user dropdown"
        description="This is a great example if you want to show the avatar of a logged-in website visitor and a choice of pages relevant to the administration of their account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/user-dropdown.tsx"
      >
        <DefaultFooterSection/>
      </BlockSection>

    </>
  );
};

export default AllHeaders;
