"use client"
import React, { useState } from 'react';
import OptionsBar from "./OptionsBar";
import Overview from "./Overview";
import Review from "./Review";
import Image from "next/image";
import Map from "./Map";
import ProgramDuration from './ProgramDuration';
import Program from './Program';
import SideBarMenuRoot from '@components/ui/Sidebar/SidebarMenuRoot';

const example_package = {
  item_imgUrl: "/location.svg",
  item_title: "TOURIST BUS - HOP ON HOP OFF ATHENS",
  item_loc: "Jibhi, Himhoadfaland Prades, India",
  item_desc:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ƒIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  item_review_count: 371,
  item_review_tp: 4.2,
};

const package_detail = () => {
    const [selectedOption, setSelectedOption] = useState('overview');

    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
  
  return (
    <main className="bg-white  flex justify-center items-center w-screen mb-8">
      <div className="flex-layout flex items-baseline pt-16 max-w-[78.25rem] gap-[4.375rem] grow">
        {/* <!-- DETAILS CONTAINER --> */}

        <div className="details-container container desktop:px-[1.25rem] desktop:w-8/12 px-4 w-full">
          <section
            id="package-details-header"
            className="font-poppins w-full flex flex-col justify-center items-start"
          >
            <div className="flex flex-col gap-1 mb-1 w-full desktop:text-[24px]">
              <h1 className="font-semibold">{example_package.item_title}</h1>
              <span className="flex gap-1 text-[0.75rem]">
                <Image
                  src={"/location.svg"}
                  alt=""
                  width={10}
                  height={10}
                />
                {example_package.item_loc}
              </span>
              <div className="flex w-full justify-start items-center gap-2">
                <span className="p-1 bg-primary rounded-[4px]">
                  {" "}
                  {example_package.item_review_tp}{" "}
                </span>
                <span className="text-[0.73rem]"> Very Good </span>
                <a
                  href=""
                  className="text-[0.9rem] font-bold"
                >
                  {example_package.item_review_count}
                </a>
              </div>
            </div>
          </section>

          <section id="package-details-preview">
            <div className="h-auto w-full">
              {/* <!-- Required wrapper DO NOT DELETE--> */}
              <div className="h-full desktop:w-full">
                {/* <!-- classNameName --> */}
                <div className="w-full h-auto overflow-hidden">
                  <Image
                    src="/antalya-banner.jpg"
                    alt=""
                    width={800}
                    height={400}
                    className="rounded-3xl"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="h-auto hidden desktop:flex justify-center items-center">
            {/* <!-- Required wrapper DO NOT DELETE--> */}
            <div className="h-full desktop:w-full flex justify-start w-full gap-4">
              {/* <!-- classNameName --> */}
              <div className="w-[60%] flex justify-center">
                <img
                  src="public/detail-placeholder.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="w-[30%] flex gap-4 flex-col">
                <div className="w-[100%] flex justify-center">
                  <img
                    src="public/detail-placeholder2.png"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="w-[100%] flex justify-center">
                  <img
                    src="public/detail-placeholder3.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- PACKAGE DETAIL ACCORDEON START --> */}

          <section className="py-4 px-1 package-details-article">
            <article className="font-poppins text-[0.9rem]">
              {example_package.item_desc}
            </article>
          </section>

          <section className="package-details w-full gap-8">
            <OptionsBar onOptionChange={handleOptionChange} selectedOption={selectedOption} />

            <ProgramDuration />
          </section>

          {selectedOption === 'overview' && <Overview />}
          {selectedOption === 'map' && <Map />}
          {selectedOption === 'program' && <Program />}


          {/* <!-- REVIEW ACCORDEON START --> */}

          <Review />
        </div>
        {/* <!-- REVIEW ACCORDEON END -->

      <!-- SIDEBAR START --> */}

        <SideBarMenuRoot />
        {/* <!-- SIDEBAR END --> */}
      </div>
    </main>
  );
};

export default package_detail;
