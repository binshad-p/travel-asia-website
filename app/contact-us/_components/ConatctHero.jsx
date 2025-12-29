"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { socialMediaDataFooter } from "@/constatnt";
import Link from "next/link";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactHero = () => {
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Initialize EmailJS with public key
  emailjs.init(process.env.NEXT_PUBLIC_USER_ID); // Replace with your actual public key

  const onSubmit = async (data) => {
    try {
      setIsPending(true);

      const templateParams = {
        from_name: data.full_name,
        to_name: "Emirates Travels",
        phone_number: data.phone_number,
        whatsapp_number:  data.whatsapp_number,
        message: data.message,
        reply_to: data.email, // Using phone as reply_to
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID, // EmailJS Service ID
        process.env.NEXT_PUBLIC_TEMPLATE_ID, // EmailJS Template ID
        templateParams
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        reset(); // Reset form after successful submission
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex xl:max-[1550px]:flex xl:max-[1550px]:flex-row lg:max-2xl:flex-col  gap-[100px] lg:max-2xl:gap-[50px] items-center justify-between padding-x padding-y sm:max-lg:flex-col max-sm:flex-col sm:max-lg:gap-[30px] max-sm:gap-10 max-sm:mb-[3rem] max-sm:pb-10">
      {/* Form section */}
      <div className="w-1/2  lg:max-2xl:w-full flex flex-col items-start bg-white border-[#ECEFF2] rounded-3xl sm:max-lg:gap-10 max-sm:p-5 max-sm:gap-10 sm:max-lg:p-4 max-sm:w-full sm:max-lg:w-full sm:max-lg:mt-[0rem]">
        <p className="text-[3rem] mb-[3rem] min-w-max sm:max-lg:text-[2.5rem] sm:max-lg:mb-[1rem] max-sm:text-3xl max-sm:mb-0">Send us a Message</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          {/* Full Name */}
          <div className="flex flex-col items-start gap-3 max-sm:gap-1">
            <label
              htmlFor="full_name"
              className="font-semibold font-Inter text-[#5F6980] max-sm:text-sm"
            >
              Full Name
            </label>
            <input
              id="full_name"
              placeholder="John Smith"
              {...register("full_name", {
                required: "Full name is required",
              })}
              className="px-4 py-4 text-[#9D9FA1] rounded-lg border border-[#D0D5DD] w-full outline-none"
            />
            {errors.full_name && (
              <span className="text-red-500 text-sm">
                {errors.full_name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col items-start gap-3 max-sm:gap-1">
            <label
              htmlFor="email"
              className="font-semibold font-Inter text-[#5F6980] max-sm:text-sm"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="px-4 py-4 text-[#9D9FA1] rounded-lg border border-[#D0D5DD] w-full outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone Number & WhatsApp */}
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-4">
            {/* Phone Number */}
            <div className="flex flex-col items-start gap-3 max-sm:gap-1">
              <label className="font-semibold font-Inter text-[#5F6980] max-sm:text-sm">
                Phone Number
              </label>
              <div className="flex w-full gap-2">
                <input
                  id="phone_number"
                  type="number"
                  placeholder="9999999999"
                  {...register("phone_number", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{6,12}$/,
                      message: "Enter a valid phone number (6-12 digits)",
                    },
                  })}
                  className="px-4 w-full py-4 text-[#9D9FA1] rounded-lg border border-[#D0D5DD] outline-none"
                />
              </div>
              {errors.phone_number && (
                <span className="text-red-500 text-sm">
                  {errors.phone_number.message}
                </span>
              )}
            </div>

            {/* WhatsApp Number */}
            <div className="flex flex-col items-start gap-3 max-sm:gap-1">
              <label className="font-semibold font-Inter text-[#5F6980] max-sm:text-sm">
                WhatsApp Number
              </label>
              <div className="flex w-full gap-2">
                <input
                  id="whatsapp_number"
                  type="number"
                  placeholder="9999999999"
                  {...register("whatsapp_number", {
                    required: "WhatsApp number is required",
                    pattern: {
                      value: /^[0-9]{6,12}$/,
                      message: "Enter a valid WhatsApp number (6-12 digits)",
                    },
                  })}
                  className="px-4 py-4 w-full text-[#9D9FA1] rounded-lg border border-[#D0D5DD] outline-none"
                />
              </div>
              {errors.whatsapp_number && (
                <span className="text-red-500 text-sm">
                  {errors.whatsapp_number.message}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col items-start gap-3 max-sm:gap-1">
            <label
              htmlFor="message"
              className="font-semibold font-Inter text-[#5F6980] max-sm:text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              {...register("message", {
                required: "Message is required",
              })}
              className="px-4 py-4 text-[#9D9FA1] rounded-lg border border-[#D0D5DD] w-full outline-none"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className={`mt-4 bg-primary text-white py-3 px-6 rounded-lg w-full ${
              isPending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary-dark"
            }`}
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col gap-11 mt-40 lg:max-2xl:w-full lg:max-2xl:mt-10 sm:max-lg:w-full max-sm:w-full max-sm:mt-5 sm:max-lg:mt-5">
        <div className="flex items-center gap-4">
          <div className="bg-[#EFF2F5] w-[60px] h-[60px] rounded-full flex justify-center items-center">
            <MdEmail size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#353635] text-2xl font-medium max-sm:text-xl">Email</p>
            <p className="text-[#626965] text-lg max-sm:text-base">mail.emiratestravels@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-[#EFF2F5] w-[60px] h-[60px] rounded-full flex justify-center items-center">
            <MdLocalPhone size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#353635] text-2xl font-medium max-sm:text-xl">Phone number</p>
            <p className="text-[#626965] text-lg max-sm:text-base">+91 9746 511 022 </p>
            <p className="text-[#626965] text-lg max-sm:text-base">+91 9809 963 994 </p>
            <p className="text-[#626965] text-lg max-sm:text-base">+91 8590 800 701</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-[#EFF2F5] w-[60px] h-[60px] rounded-full flex justify-center items-center">
            <FaLocationDot size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#353635] text-2xl font-medium max-sm:text-xl">Office</p>
            <p className="text-[#626965] text-lg max-sm:text-base">
              Palakkad - Kozhikode Hwy, Thazhekode West,
              <br className="lg:max-2xl:hidden" />
              Near SBI Kerala 679341
            </p>
            <p className="text-[#626965] text-lg max-sm:text-base">
              Branch : Olavakkode - Palakkad
            </p>
          </div>
        </div>

        <hr />
        <div className="flex items-center gap-6 max-sm:flex-col">
          <p className="text-3xl font-semibold max-2xl:text-2xl max-sm:text-2xl">Follow Us</p>
          <div className="h-[2px] w-16 bg-primary max-sm:w-40"></div>
          <div className="flex  gap-3">
            {socialMediaDataFooter?.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <Link href={item?.url}>
                  <div className="bg-[#EFF2F5] w-[60px] h-[60px]  rounded-full flex justify-center items-center max-2xl:w-[50px] max-2xl:h-[50px]">
                    {item?.icon}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
