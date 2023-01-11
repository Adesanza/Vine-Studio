import {
  ApplyButtonContainer,
  BulbContainer,
  BulletContainer,
  BusinessContainer,
  ContactUsButtonContainer,
  HowWeWorkContainer,
  LandingContainer,
  LandingMainBox,
  LandingMainContent,
  LandingMainLinkContainer,
  NewsLetterContainer,
  StartUpContainer,
  SubscribeBtn,
  SubscribeContainer,
  TwoSubContainer,
  VerticalHR,
  WeDoHeader,
  WeWorkContentContainer,
  WeWorkHeader,
  WhatWeDoContainer,
  WhereWeFocusContainer,
} from "./Landing.styled";
import LandingImage from "../../public/assets/landing-img.svg";
import WeWork from "../../public/assets/we-work.svg";
import VineBulb from "../../public/assets/vine-bulb.svg";
import WeFocus from "../../public/assets/we-focus.svg";
import BulletPoint from "../../public/assets/bullet-point.svg";
import WeDo from "../../public/assets/we-do.svg";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

type Props = {};

const Landing = (props: Props) => {
  return (
    <LandingContainer>
      <LandingMainBox>
        <LandingMainContent>
          <h1>
            We <span>support</span> start-ups and businesses
          </h1>
          <p>
            The purpose of ‘Vine’ is to work with entrepreneurs to nurture and
            build businesses based on godly principles. We believe that
            entrepreneurs can leverage these principles to grow sustainable and
            successful indigenous businesses in Africa.
          </p>
          <LandingMainLinkContainer>
            <ApplyButtonContainer>apply</ApplyButtonContainer>
            <ContactUsButtonContainer>contact us</ContactUsButtonContainer>
          </LandingMainLinkContainer>
        </LandingMainContent>

        <Image src={LandingImage} height={490} width={500} alt="vine-studio" />
      </LandingMainBox>

      <HowWeWorkContainer>
        <WeWorkHeader>
          <Image src={WeWork} height={50} width={50} alt="vine-studio" />
          <h3>How we work</h3>
        </WeWorkHeader>
        <BulbContainer>
          <Image src={VineBulb} height={600} width={600} alt="vine-studio" />
          <WeWorkContentContainer>
            <div>
              <h5>The Incubator</h5>
              <p>
                Vine’s Incubator Program works intensively with aspiring
                entrepreneurs to shape their ideas and provide access to market
                relevant information and partnerships. Support provided will be
                tailored to the context of the market within which the
                entrepreneurs exist.
                <br />
                <span>learn more</span>
              </p>
            </div>
            <div>
              <h5>The Academy</h5>
              <p>
                Cornerstone Academy, our digital learning platform, provides
                access to thousands of hours of training material specifically
                curated and applicable to the needs of SMEs and startups in the
                African context. Cornerstone’s curriculum is designed in
                collaboration with expert educators and leverages their
                practical business experience across various fields.
                <br />
                <span>learn more</span>
              </p>
            </div>
            <div>
              <h5>The Advisors</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
                <br />
                <span>learn more</span>
              </p>
            </div>
          </WeWorkContentContainer>
        </BulbContainer>
      </HowWeWorkContainer>
      <WhereWeFocusContainer>
        <section>
          <Image src={WeFocus} height={40} width={87} alt="vine-studio" />
          <aside>
            <h5>Where we focus</h5>
            <p>
              Our mission is to build a network of bonafide entrepreneurs who
              will dare to build with a desire to solve critical challenges that
              we face across the world and primarily in Africa. By fostering a
              collaborative environment for entrepreneurs in these focus areas,
              we hope to design solutions that can create much needed linkages
              for growth <span> IN PEATH.</span>
            </p>
            <BulletContainer>
              <div>
                <Image
                  src={BulletPoint}
                  height={24}
                  width={24}
                  alt="vine-studio"
                />
                <span>P</span> <EastIcon /> Power
              </div>
              <div>
                <Image
                  src={BulletPoint}
                  height={24}
                  width={24}
                  alt="vine-studio"
                />
                <span>E</span> <EastIcon /> Education
              </div>
              <div>
                <Image
                  src={BulletPoint}
                  height={24}
                  width={24}
                  alt="vine-studio"
                />
                <span>A</span> <EastIcon /> Agriculture
              </div>
              <div>
                <Image
                  src={BulletPoint}
                  height={24}
                  width={24}
                  alt="vine-studio"
                />
                <span>T</span> <EastIcon /> Transportation
              </div>
              <div>
                <Image
                  src={BulletPoint}
                  height={24}
                  width={24}
                  alt="vine-studio"
                />
                <span>H</span> <EastIcon /> Health
              </div>
            </BulletContainer>
          </aside>
        </section>
        <Image src={VineBulb} height={600} width={600} alt="vine-studio" />
      </WhereWeFocusContainer>
      <WhatWeDoContainer>
        <WeDoHeader>
          <Image src={WeDo} height={40} width={80} alt="vine-studio" />
          <h3>What we do</h3>
          <p>Our range of services include;</p>
        </WeDoHeader>
        <hr />
        <TwoSubContainer>
          <StartUpContainer>
            <Image src={BulletPoint} height={24} width={24} alt="vine-studio" />
            <section>
              <h4>StartUp services</h4>
              <p>1.Develop a clear business objective and strategy</p>
              <p>
                2. Assess the viability of an idea, alongside alignment of
                business strategy to market demand{" "}
              </p>
              <p>
                2. Assess the viability of an idea, alongside alignment of
                business strategy to market demand{" "}
              </p>
              <p>2. Assess the viability of an idea, alongside</p>
            </section>
          </StartUpContainer>
          <VerticalHR></VerticalHR>
          <BusinessContainer>
            <Image src={BulletPoint} height={24} width={24} alt="vine-studio" />
            <section>
              <h4>StartUp services</h4>
              <p>
                1. Develop a clear business objective and strategy alignment of
                business strategy to market demand{" "}
              </p>
              <p>2. Assess the viability of an idea, alongside</p>
            </section>
          </BusinessContainer>
        </TwoSubContainer>
      </WhatWeDoContainer>
      <NewsLetterContainer>
        <section>
          <h3>Our Newsletter</h3>
          <p>Be part of the first to enjoy vine.</p>
          <SubscribeContainer>
            <input type="text" placeholder="Enter your email address" />
            <SubscribeBtn>subscribe</SubscribeBtn>
          </SubscribeContainer>
        </section>
      </NewsLetterContainer>
    </LandingContainer>
  );
};

export default Landing;
