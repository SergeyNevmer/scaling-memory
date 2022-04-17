import React from "react";

import logo from "../../img/logo.png";
import clock from "../../icons/clock.png";
import iso from "../../icons/iso.png";
import geolocation from "../../icons/geolocation.png";
import diaphragm from "../../icons/diaphragm.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
import facebook from "../../icons/facebook.png";

import logo01 from "../../img/companyLogo/company01.png";
import logo02 from "../../img/companyLogo/company02.png";
import logo03 from "../../img/companyLogo/company03.png";
import logo04 from "../../img/companyLogo/company04.png";
import logo05 from "../../img/companyLogo/company05.png";

import { Icon } from "../../components/Icon/Icon";
import { Card } from "../../components/Card/Card";

export const Homepage = () => {
  return (
    <>
      <header className="w-full h-24 bg-[#181818] flex justify-center">
        <div className="w-[1200px] h-24 flex justify-between items-center">
          <img className="w-32 h-8" src={logo} alt="Logo" />
          <nav>
            <ul className="font-poppins font-normal text-sm text-white flex w-[700px] h-8 justify-between">
              <li className="flex justify-center items-center">
                <button>Business areas</button>
              </li>
              <li className="flex justify-center items-center">
                <button>Featured images</button>
              </li>
              <li className="flex justify-center items-center">
                <button>Gear cage</button>
              </li>
              <li className="flex justify-center items-center">
                <button>Contact</button>
              </li>
              <li>
                <button className="flex justify-center text-black bg-white px-6 pt-2 pb-3 rounded-lg ">
                  Get template
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="font-poppins">
        <section className="w-full h-[800px] bg-bgFirstSection bg-cover flex flex-col justify-end items-center">
          <div className="w-[600px] h-[209px]">
            <p className="text-[#C0C0C0] text-center text-sm leading-5 uppercase tracking-[2px] mb-[1px]">
              Photographer & Filmmaker
            </p>
            <h1 className="text-white text-[54px] leading-[60px] text-center mb-[18px]">
              Aperture Studios
            </h1>
            <p className="text-[#C0C0C0] text-center text-sm leading-5 w-[560px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="w-full h-4 mb-10 flex justify-end">
            <div className="w-[300px] h-4 flex justify-around mr-10">
              <Icon text="1/2000s" img={clock} />
              <Icon text="f/11" img={diaphragm} />
              <Icon text="100" img={iso} />
              <Icon text="Iceland" img={geolocation} />
            </div>
          </div>
        </section>
        <section className="w-full h-[1558px] bg-[#000000] flex justify-center items-center">
          <div className="w-[1200px] h-[1338px] flex flex-col justify-between items-center">
            <div className="w-[600px] h-[82px] mb-10">
              <h1 className="text-[40px] leading-[42px] text-center text-white mb-4">
                What we do.
              </h1>
              <p className="text-[23px] leading-[30px] text-center text-[#C0C0C0] mb-[2px]">
                The areas that we're specialized in.
              </p>
            </div>
            <div className="w-[1168px] h-[1216px] flex flex-wrap justify-center items-center">
              <Card
                img="bg-card01"
                title="Product Photography"
                text="Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam."
              />
              <Card
                img="bg-card02"
                title="Architecture Photography"
                text="Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec."
              />
              <Card
                img="bg-card03"
                title="Drone Photography"
                text="Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam."
              />
              <Card
                img="bg-card04"
                title="Wildlife Photography"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis."
              />
            </div>
          </div>
        </section>
        <section className="w-full h-[600px] bg-bgThirdSection bg-cover flex flex-col justify-end">
          <div className="w-[300px] self-end mb-[200px] mr-14">
            <h1 className="text-sm leading-5 tracking-[2px] text-white uppercase">
              Sunset at Mount Fuji
            </h1>
            <p className="text-sm leading-5 w-[298px] h-[60px] text-[#C0C0C0]">
              Duis tristique sed lorem a vestibulum. Cras commodo consequat
              orci, in convallis risus egestas non.
            </p>
          </div>
          <div className="w-full h-4 mb-10 flex justify-end">
            <div className="w-[300px] h-4 flex justify-around mr-10">
              <Icon text="1''" img={clock} />
              <Icon text="f/16" img={diaphragm} />
              <Icon text="400" img={iso} />
              <Icon text="Japan" img={geolocation} />
            </div>
          </div>
        </section>
        <section className="w-full h-[540px] flex">
          <div className="w-[720px] h-full bg-[#000000] flex justify-center items-center">
            <div className="w-[600px] h-[314px flex flex-col justify-center">
              <p className="text-sm leading-5 tracking-[2px] text-[#C0C0C0] mb-[6px]">
                The Gear cage
              </p>
              <p className="text-lg leading-8 text-[#FFFFFF] mb-[14px]">
                The tools that we use.
              </p>
              <p className="text-sm leading-5 text-[#FFFFFF] w-[514px] h-20 mb-[20px]">
                The say that "no place is boring if you've had a good night's
                sleep and have a pocket full of unexposed film". While we don't
                shoot (a lot) of film these days — these are the tools that we
                actually use everyday to capture the amazing things around us.
              </p>
              <div className="w-[152px] h-[42px] bg-white flex items-center justify-around rounded-lg mb-3">
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <button className="text-[15px] leading-5 tracking-[0.4px]">
                  Check it out
                </button>
              </div>
            </div>
          </div>
          <div className="w-[720px] h-full bg-bgFourthSection bg-cover flex flex-col justify-end">
            <div className="w-full h-4 mb-10 flex justify-end">
              <div className="w-[300px] h-4 flex justify-around mr-10">
                <Icon text="0,8''" img={clock} />
                <Icon text="f/5,6" img={diaphragm} />
                <Icon text="100" img={iso} />
                <Icon text="Sweden" img={geolocation} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-[600px] bg-bgFifthSection bg-cover flex flex-col justify-end">
          <div className="w-[300px] self-end mb-[200px] mr-14">
            <h1 className="text-sm leading-5 tracking-[2px] text-white uppercase">
              Monstera Leafs
            </h1>
            <p className="text-sm leading-5 w-[298px] h-[60px] text-[#C0C0C0]">
              Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
              ultrices, ut faucibus orci tincidunt.
            </p>
          </div>
          <div className="w-full h-4 mb-10 flex justify-end">
            <div className="w-[300px] h-4 flex justify-around mr-10">
              <Icon text="1/400s" img={clock} />
              <Icon text="f/3,5" img={diaphragm} />
              <Icon text="100" img={iso} />
              <Icon text="Costa Rica" img={geolocation} />
            </div>
          </div>
        </section>
        <section className="w-full h-[500px] bg-[#000000] flex justify-center items-center">
          <div className="w-[1200px] h-[280px] flex flex-col justify-center items-center">
            <div className="w-[600px] h-[82px] mb-[20px]">
              <h1 className="text-[40px] leading-[42px] text-center text-white mb-[10px]">
                Past clients
              </h1>
              <p className="text-2xl leading-[30px] text-center text-[#C0C0C0]">
                Trusted by your favourite companies
              </p>
            </div>
            <div className="w-[1168px] h-[158px] flex justify-center items-center">
              <img className="mr-[109px]" src={logo01} alt="logo" />
              <img className="mr-[109px]" src={logo02} alt="logo" />
              <img className="mr-[109px]" src={logo03} alt="logo" />
              <img className="mr-[109px]" src={logo04} alt="logo" />
              <img src={logo05} alt="logo" />
            </div>
          </div>
        </section>
        <section className="w-full h-[600px] bg-bgSeventhSection bg-cover flex flex-col justify-end">
          <div className="w-[300px] self-end mb-[200px] mr-14">
            <h1 className="text-sm leading-5 tracking-[2px] text-white uppercase">
              Star fall in the Himalayas
            </h1>
            <p className="text-sm leading-5 w-[298px] h-[60px] text-[#C0C0C0]">
              Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
              condimentum dapibus congue et, vulputate ut ligula.
            </p>
          </div>
          <div className="w-full h-4 mb-10 flex justify-end">
            <div className="w-[300px] h-4 flex justify-around mr-10">
              <Icon text="6''" img={clock} />
              <Icon text="f/11" img={diaphragm} />
              <Icon text="800" img={iso} />
              <Icon text="Nepal" img={geolocation} />
            </div>
          </div>
        </section>
        <section className="w-full h-[406px] bg-[#000000] flex justify-center items-center">
          <div className="w-[600px] h-[186px]">
            <h1 className="text-[40px] leading-[42px] text-center text-white mb-[15px]">
              Need help with photography <br />
              or videography?
            </h1>
            <p className="text-2xl leading-[30px] text-center text-[#C0C0C0] mb-[12px]">
              We're here for you!
            </p>
            <div className="w-[600px] h-[52px] flex justify-center">
              <div className="w-[152px] h-[42px] bg-white flex items-center justify-around rounded-lg mb-3">
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <button className="text-[15px] leading-5 tracking-[0.4px]">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-[652px] bg-[#000000] flex justify-center items-center">
          <div className="w-[1168px] h-[452px]">
            <div className="flex justify-between mb-[36px]">
              <div className="w-[457px] h-[200px]">
                <img className="mb-[20px]" src={logo} alt="logo" />
                <p className="text-[13px] leading-5 text-[#C0C0C0]">
                  Photographers & videographers capturing the world around us.
                </p>
              </div>
              <div className="flex">
                <div className="w-[221px] h-[200px] mr-[15px]">
                  <p className="text-[14px] leading-5 tracking-[2px] text-[#C0C0C0] mb-[10px] uppercase">
                    Business areas
                  </p>
                  <div className="flex flex-col">
                    <a
                      className="text-sm leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Product Photography
                    </a>
                    <a
                      className="text-sm leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Architecture Photography
                    </a>
                    <a
                      className="text-sm leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Drone Photography
                    </a>
                    <a className="text-sm leading-5 text-white" href="#top">
                      Wildlife Photography
                    </a>
                  </div>
                </div>
                <div className="w-[221px] h-[200px">
                  <p className="uppercase leading-5 text-sm tracking-[2px] text-[#C0C0C0] mb-[10px]">
                    Pages
                  </p>
                  <div className="flex flex-col">
                    <a
                      className="text-[13px] leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Gear cage
                    </a>
                    <a
                      className="text-[13px] leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Featured images
                    </a>
                    <a
                      className="text-[13px] leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Contact
                    </a>
                    <a
                      className="text-[13px] leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Style guide
                    </a>
                    <a
                      className="text-[13px] leading-5 text-white mb-[10px]"
                      href="#top"
                    >
                      Instructions
                    </a>
                    <a className="text-[13px] leading-5 text-white" href="#top">
                      Changelog
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-white mb-[36px]"></div>
            <div className="mb-[36px] flex">
              <div className="w-[695px] h-[60px] mr-4 flex flex-col justify-between">
                <p className="text-sm leading-5 tracking-[2px] text-white uppercase">
                  Subscribe to our newsletter
                </p>
                <p className="text-[#C0C0C0] leading-5 text-[13px]">
                  Read about all the things we do.
                </p>
              </div>
              <div className="w-[458px] h-[60px] bg-white rounded-lg flex justify-end items-center">
                <div className="w-[63px] h-[30px] bg-black rounded-lg mr-1.5"></div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-white mb-[36px]"></div>
            <div className="flex justify-between">
              <div>
                <p className="text-sm leading-5 text-[#C0C0C0]">
                  © Aperture Photography, Inc. All rights reserved. Licensing.
                </p>
              </div>
              <div className="flex">
                <a className="mr-[20px]" href="https://twitter.com/">
                  <img src={twitter} alt="twitter" />
                </a>
                <a className="mr-[20px]" href="https://www.instagram.com/">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
