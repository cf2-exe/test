import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Ensure you import the CSS for styling
import Navbar from "@/components/navbar";
import { Button1 } from "@/components/button";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.05,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div className="overflow-hidden" data-scroll-container>
      <div
        ref={scrollRef}
        className="flex flex-col gap-[10rem] max-md:gap-[3rem]"
        data-scroll-container
      >
        <Navbar />

        <section className="flex flex-col h-[150vh] gap-[5rem]">
          <div className="h-[40vh] grid [grid-template-columns:_repeat(18,_minmax(0,_1fr));] [grid-template-rows:_repeat(1,_minmax(0,_1fr));] max-md:flex max-md:p-4">
            <div className="col-start-7 col-span-11 self-end pb-8 text-6xl whitespace-pre-wrap max-md:flex max-md:w-[70%]">
              <h1 className="text-[4rem] max-xl:text-[3rem] max-md:text-[2rem] font-bold">Build your first website today with Weblocatores</h1>
            </div>
          </div>

          <div className="h-[60vh] grid [grid-template-columns:_repeat(18,_minmax(0,_1fr));] [grid-template-rows:_repeat(1,_minmax(0,_1fr));] max-lg:flex max-lg:flex-col max-md:h-auto">
            <div className="h-full col-span-7 border-[#ebebeb] border-t-[1px] flex flex-col">
              <div className="h-[70%] p-8 flex flex-col justify-between">
                <h1 className="text-[2rem] uppercase">
                  Step up your businesses with Weblocatores
                </h1>
                <h1>
                  We specialize in creating user-focused websites that combine
                  aesthetics with functionality. With years of experience and a
                  passion for innovation, we empower businesses to thrive online.
                </h1>
              </div>

              <div className="h-[30%] border-[#ebebeb] border-[1px] flex items-center p-4">
                <li>
                  <Button1 text="Start your journey today"></Button1>
                </li>
              </div>
            </div>

            <div className="h-full col-span-11 bg-[url('/LandingImage.jpg')] bg-center bg-cover bg-no-repeat max-md:h-[50vh]"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
