import React from "react";

import logo from "../../img/logo.png";
import clock from "../../icons/clock.png";
import iso from "../../icons/iso.png";
import geolocation from "../../icons/geolocation.png";
import diaphragm from "../../icons/diaphragm.png";

import { Icon } from "../../components/Icon/Icon";
// import { Card } from "../../components/Card/Card";

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
              <div
                className={`w-[576px] h-[600px] bg-card01 bg-cover mr-2 flex flex-col justify-end`}
              >
                <div className="w-[576px] h-[142px]">
                  <h2 className="text-sm leading-5 tracking-[2px] uppercase text-white ml-[30px] mb-2">
                    Product Photography
                  </h2>
                  <p className="text-sm leading-5 text-[#C0C0C0] w-[501px] h-[50px] ml-[30px] mb-1">
                    Cras commodo consequat orci, in convallis risus egestas non.
                    Nulla efficitur auctor hendrerit. Etiam ut orci varius,
                    faucibus libero ac, cursus quam.
                  </p>
                  <div className="w-[130px] h-[42px] bg-white flex items-center justify-around rounded-lg ml-[30px]">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                    <button className="text-[15px] leading-5 tracking-[0.4px]">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`w-[576px] h-[600px] bg-card02 bg-cover mr-2 flex flex-col justify-end`}
              >
                <div className="w-[576px] h-[142px]">
                  <h2 className="text-sm leading-5 tracking-[2px] uppercase text-white ml-[30px] mb-2">
                    Product Photography
                  </h2>
                  <p className="text-sm leading-5 text-[#C0C0C0] w-[501px] h-[50px] ml-[30px] mb-1">
                    Cras commodo consequat orci, in convallis risus egestas non.
                    Nulla efficitur auctor hendrerit. Etiam ut orci varius,
                    faucibus libero ac, cursus quam.
                  </p>
                  <div className="w-[130px] h-[42px] bg-white flex items-center justify-around rounded-lg ml-[30px]">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                    <button className="text-[15px] leading-5 tracking-[0.4px]">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`w-[576px] h-[600px] bg-card03 bg-cover mr-2 flex flex-col justify-end`}
              >
                <div className="w-[576px] h-[142px]">
                  <h2 className="text-sm leading-5 tracking-[2px] uppercase text-white ml-[30px] mb-2">
                    Product Photography
                  </h2>
                  <p className="text-sm leading-5 text-[#C0C0C0] w-[501px] h-[50px] ml-[30px] mb-1">
                    Cras commodo consequat orci, in convallis risus egestas non.
                    Nulla efficitur auctor hendrerit. Etiam ut orci varius,
                    faucibus libero ac, cursus quam.
                  </p>
                  <div className="w-[130px] h-[42px] bg-white flex items-center justify-around rounded-lg ml-[30px]">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                    <button className="text-[15px] leading-5 tracking-[0.4px]">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`w-[576px] h-[600px] bg-card04 bg-cover mr-2 flex flex-col justify-end`}
              >
                <div className="w-[576px] h-[142px]">
                  <h2 className="text-sm leading-5 tracking-[2px] uppercase text-white ml-[30px] mb-2">
                    Wildlife Photography
                  </h2>
                  <p className="text-sm leading-5 text-[#C0C0C0] w-[501px] ml-[30px] mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus
                    feugiat eros quis consectetur. Morbi neque ex, condimentum
                    dapibus congue et, vulputate ut ligula. Vestibulum sit amet
                    urna turpis.
                  </p>
                  <div className="w-[130px] h-[42px] bg-white flex items-center justify-around rounded-lg ml-[30px]">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                    <button className="text-[15px] leading-5 tracking-[0.4px]">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
