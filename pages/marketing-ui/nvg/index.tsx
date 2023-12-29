import type { FC } from "react";



import MegaMenuHeader from "./navbar";
import DefaultHero from "./hero";
import DefaultPricingTable from "./block";
import DefaultFooterSection from "./footer";

const AllHeaders: FC = function () {
  return (
    <>
      

      
        <MegaMenuHeader />
     


     
        <DefaultHero />
      

        <DefaultPricingTable/>
     

      
        <DefaultFooterSection/>
     



      
    </>
  );
};

export default AllHeaders;
