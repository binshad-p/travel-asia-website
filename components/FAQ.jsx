import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/constatnt";

export function FAQ() {
  return (
    <section className="padding-x pb-[8rem] flex flex-col items-center gap-20 sm:max-lg:gap-[2rem] max-sm:gap-[2rem] larger-screen lg:max-2xl:gap-10 lg:max-2xl:pb-[5rem] sm:max-lg:pb-[5rem] max-sm:pb-[3rem]">
      <div className="flex flex-col gap-6 justify-center items-center max-sm:gap-3">
        <h2 className=" text-[3.375rem] font-semibold lg:max-2xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:text-center">
          Frequently asked questions{" "}
        </h2>
        <p className="text-[#626965] w-[70%] text-center max-sm:w-full max-sm:text-sm">
        Find answers to common questions about Credenz, including courses, enrollment, payments, and support.
        </p>
      </div>

      <Accordion
        type="single"
        defaultValue="1"
        collapsible
        className="w-[70%] sm:max-lg:w-[80%] max-sm:w-[100%]"
      >
        {FAQData?.map((item, index) => (
          <AccordionItem
            value={item?.id}
            className="p-4 mb-5 max-sm:mb-3 rounded-lg bg-light"
            key={index}
          >
            <AccordionTrigger>{item?.title}</AccordionTrigger>
            <AccordionContent><p className="max-sm:text-sm">{item?.description}</p></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
