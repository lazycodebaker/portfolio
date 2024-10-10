"use client";


import React from "react";
import Image from "next/image";

import MY_IMAGE_BW from "@/assets/images/my_image_bw.png"
import Layout from "@/components/Layout/Inner";
import Parallax from "@/components/Animations/Parallax";
import { color } from "@/constants";
import Experience from "./experience";

const text = "Hi, Im m Anshuman Tiwari. A student in the field of Machine Learning and Artificial Intelligence, with additional skills as a TypeScript developer. Over the past two years, I have had the privilege of collaborating closely with exceptional individuals and teams, gaining valuable experience and insights. My passion lies in continuous learning and exploring diverse fields to broaden my knowledge and skills."

function ClampText({ min, max, children }: {
  min: string,
  max: string,
  children: React.ReactNode
}) {
  const textStyle = {
    fontSize: `clamp(${min}, 0.71rem + 2.47vw, ${max})`,
    lineHeight: '1.5',
  };

  return <h1 style={textStyle}>
    {children}
  </h1>;
}

const Info = () => {

  return (
    <Layout>

      <div style={{
        backgroundColor: color.BLACK,
        color: color.WHITE
      }} className="p-2">

        <Parallax id="info" speed={2} key={"info"} className="h-screen">
          <section className=''>
            <div style={{
              backgroundColor: color.BLACK,
              color: color.WHITE
            }}>
              <ClampText key="info-heading" min={"2.12rem"} max={"3rem"}>
                {text}
              </ClampText>
            </div>
          </section>
        </Parallax>

        <Parallax id="info-text" speed={1} key={"info-text"} className="h-screen">

          <section className='grid container md:grid-cols-3 gap-16 md:px-10 px-0 my-20 grid-cols-1' >

            <div style={{
              backgroundColor: color.BLACK,
              color: color.WHITE
            }} className='w-full md:col-span-1 flex items-center justify-start'>
              <Image src={MY_IMAGE_BW} alt="Anshuman Tiwari" className="w-full h-full" />
            </div>

            <div style={{
              backgroundColor: color.BLACK,
              color: color.WHITE
            }} className={`flex text-white md:col-span-2 items-center justify-center flex-col tracking-wide md:px-8 px-0 uppercase font-semibold`}>
              <p>
                I WAS BORN AND RAISED IN A SMALL TOWN IN KAZAKHSTAN CALLED KYZYLORDA. WHEN I ENROLLED IN COLLEGE IN 2014 AT THE AGE OF 15, <br /> <br />
              </p>
              <p>
                I WASN &apos;T SURE WHAT I WANTED TO DO WITH MY LIFE. INITIALLY, I THOUGHT MY PROFESSION WOULD BE RELATED TO THE RAILWAY INDUSTRY. AND BEFORE DELVING INTO THE WORLD OF WEB DEVELOPMENT AND DESIGN, I ALSO WORKED AS A WAITER.  <br /> <br />
              </p>
              <p>
                AS A JUNIOR WEB DEVELOPER I REALIZED THAT I ENJOYED THE CREATIVE ASPECT OF MY WORK MORE, AND I MADE A FULL TRANSITION INTO THE FIELD OF DESIGN. SINCE THEN, I HAVE WORKED AS A FREELANCER ON PLATFORMS LIKE UPWORK AND COLLABORATED WITH COMPANIES AND CLIENTS ON A FULL-TIME OR CONTRACT BASIS. I’VE WORKED WITH PROMINENT COMPANIES AND CLIENTS.
              </p>
            </div>

          </section>
        </Parallax>
      </div>

      <Experience />
    </Layout>
  );
};

export default Info;
