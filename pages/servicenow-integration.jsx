import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/crypto.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ServiceNowIntegration = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="ServiceNow Integrations"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ServiceNow Integrations</h2>
          <h3>REST / SOAP / IntegrationHub</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Implemented integrations between ServiceNow and external systems
            using REST and SOAP APIs with OAuth/Basic authentication. Leveraged
            IntegrationHub to orchestrate flows, data transforms, and error
            handling. Delivered secure, scalable endpoints and robust logging.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ServiceNow
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> REST / SOAP
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IntegrationHub
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OAuth / Basic Auth
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceNowIntegration;
