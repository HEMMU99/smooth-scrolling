import React from "react";

import Icon1 from "../../images/svg-6.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-4.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Service 1</ServicesH2>
          <ServicesP>
            This Is Service-1 Get Free offer and enjoy the new schemes
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Service 2</ServicesH2>
          <ServicesP>
            This Is Service-2 Get Free offer and enjoy the new schemes
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Service 3</ServicesH2>
          <ServicesP>
            This Is Service-3 Get Free offer and enjoy the new schemes
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
