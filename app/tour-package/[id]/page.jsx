"use client";
import React from "react";
import Banner from "@/components/Banner";
import { OurPackagesData } from "@/constatnt";
import { useParams } from "next/navigation";
import PackageDetails from "@/app/tour-package/_components/package_details";
import BookingStep from "@/app/tour-package/_components/booking_step";
import OurPackages from "@/app/_components/OurPackages";

const Page = () => {
  const params = useParams();
  const { id } = params;

  // Convert id to number for comparison
  const currentData = OurPackagesData?.find((item) => item?.id === Number(id));

  if (!currentData) {
    return <div>Package not found!</div>;
  }

  return (
    <div>
      <Banner data={currentData} />
      <PackageDetails data={currentData} />
      <BookingStep />
      <OurPackages/>

    </div>
  );
};

export default Page;
