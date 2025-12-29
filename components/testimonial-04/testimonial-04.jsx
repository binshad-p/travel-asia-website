import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Marquee from "@/components/ui/marquee";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Mr. Mansoor Ali KT",
    designation: "Furnia Interiors",
    company: "",
    testimonial:
      "Our Azerbaijan trip was truly unforgettable! The entire experience was perfectly planned, and everything ran smoothly. From flights to hotel and local tours, the service was excellent. Big thanks to the team for customizing the package just the way we wanted. Highly recommended.!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Mr. Arif C",
    designation: "Homekey Architects ",
    company: " ",
    testimonial:
      "The Azerbaijan trip was a refreshing experience, both culturally and personally. The itinerary was well-balanced between relaxation and exploration. I truly appreciated the professionalism, attention to detail, and seamless coordination by the team. It exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Mr. Raheem",
    designation: "",
    company: "",
    testimonial:
      "Booked back-to-back tickets to Dubai and Saudi at an excellent price. The process was quick and smooth, even on short notice. Really impressed with the service. ",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Mr. Ahsan Saheen",
    designation: "",
    company: "",
    testimonial:
      "Had a fantastic time in Malaysia! The hotel was perfect and everything from flights to local arrangements was well taken care of. Thank you for making the trip so easy and enjoyable.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Adv. Muhammed Sahil",
    designation: "",
    company: "",
    testimonial:
      "I had to change my domestic flight plans multiple times, but the team handled everything quickly and without any hassle. Really appreciate their patience and professionalism. Highly recommend their service. ",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Mr. Muhammed Shabin",
    designation: "",
    company: "",
    testimonial:
      "Got a UAE visit visa for my mother even after booking the flight, thanks to their fast-track service! I even extended the visa through them. They’re amazing, just send a message on WhatsApp and they’ll handle the rest. Truly hassle-free. ",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 7,
    name: "Arjun, Palakkad",
    designation: "",
    company: "",
    testimonial:
      "Got my bachelor’s degree certificate attested in a very short time. The process was smooth and super quick. I’m so grateful for this, as the recruiter was waiting for it to issue my visa and I was really tensed. Thank you for the timely help.  ",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 8,
    name: "Mr. Seby Jose",
    designation: "",
    company: "",
    testimonial:
      "Booked my ticket to the United States without even a single phone call, everything was handled smoothly on WhatsApp. Their dedicated staff helped me choose the right flight, and even called a day before travel to make sure everything was set. I was truly impressed. You can blindly trust them with your travel needs, they take care of everything.  ",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial04 = () => (
  <div className="padding-y bg-white relative overflow-hidden h-[100vh]">
    {/* Decorative dotted line - top left */}

    <div className="larger-screen padding-x">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#EE822C] uppercase text-sm font-medium tracking-wider mb-3">
          Testimonials
        </p>
        <h2 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-black">
          What our clients say ?
        </h2>
      </div>

      {/* Testimonials Vertical Marquee */}
      <div className="flex gap-1 max-lg:flex-col">
        {/* Column 1 - Scrolling Down */}
        <div className="flex-1  overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:30s]">
            {testimonials.slice(0, 4).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#F8F8F8] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 my-1"
              >
                {/* Avatar and Info */}
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-white text-lg font-medium">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex mt-3">
                    <p className="font-semibold text-black text-base">
                      {testimonial.name}
                    </p>
                
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.testimonial}
                </p>

                {/* Time and Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>3:00 AM</span>
                  <span>•</span>
                  <span>Sep 27, 2024</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Column 2 - Scrolling Up */}
        <div className="flex-1  overflow-hidden">
          <Marquee pauseOnHover vertical reverse className="[--duration:30s]">
            {testimonials.slice(4, 8).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#F8F8F8] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 my-1"
              >
                {/* Avatar and Info */}
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-white text-lg font-medium">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex mt-3">
                    <p className="font-semibold text-black text-base">
                      {testimonial.name}
                    </p>
                
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.testimonial}
                </p>

                {/* Time and Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>3:00 AM</span>
                  <span>•</span>
                  <span>Sep 27, 2024</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Column 3 - Scrolling Down */}
        <div className="flex-1  overflow-hidden max-lg:hidden">
          <Marquee pauseOnHover vertical className="[--duration:30s]">
            {testimonials.slice(0, 4).map((testimonial) => (
              <div
                key={`col3-${testimonial.id}`}
                className="bg-[#F8F8F8] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 my-1"
              >
                {/* Avatar and Info */}
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-white text-lg font-medium">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex mt-3">
                    <p className="font-semibold text-black text-base">
                      {testimonial.name}
                    </p>
                
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.testimonial}
                </p>

                {/* Time and Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>3:00 AM</span>
                  <span>•</span>
                  <span>Sep 27, 2024</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial04;
