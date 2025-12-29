import {
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
  client_7,
  client_8,
  client_9,
} from "@/public";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const Logos06Page = ({ color }) => {
  const clients = [
    client_1,
    client_2,
    client_3,
    client_4,
    client_5,
    client_6,
    client_7,

  ];

  return (
    <section
      className={` flex items-center justify-center pt-20 pl-[8rem] max-sm:pl-[0rem] sm:max-lg:pl-[5rem] lg:max-2xl:pl-[5rem] lg:max-2xl:pt-14 max-sm:pt-[2rem]`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center px-4 sm:px-10">
        <h2 className="text-[#0E0E0E] text-3xl max-sm:text-[1.5rem] font-semibold max-sm:border-b-2 max-sm:border-r-0 border-r-2 border-primary pr-8 max-sm:pr-0 py-4 sm:py-10 min-w-max">
          Our Trusted Clients
        </h2>

        <div className="flex-1 overflow-hidden w-full mt-8 sm:mt-0 sm:ml-10">
          <Marquee pauseOnHover className="[--duration:20s] flex gap-8">
            {clients.map((client, index) => (
              <div key={index} className=" flex items-center justify-center ">
                <Image
                  src={client}
                  width={150}
                  height={60}
                  alt={`Client Logo ${index + 1}`}
                  className="object-contain w-[150px]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Logos06Page;
