
import type { FC } from "react";


import DefaultHero from "./hero";
import DefaultPricingTable from "./block";
import DefaultFooterSection from "./footer";


const HomePage: FC = function () {
  return (
    <>
    
     


     
        <DefaultHero />
      

        <DefaultPricingTable/>
     

      
        <DefaultFooterSection/>
    </>
  );
};



export default HomePage;
