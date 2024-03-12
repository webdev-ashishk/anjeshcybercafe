"use client";

import Image from "next/image";

const Body = () => {
  return (
    <div className="">
      <div className="stickySidebar w-[50px] h-[300px] bg-red-400 fixed top-[35%] rounded-r-lg"></div>
      <div className="mx-28">
        <div className="topdiv border border-blue-400 mt-6 flex flex-wrap justify-center">
          <div className="importantUpdate text-red-500 font-bold text-2xl text-center pt-5 w-[300px] h-[300px] bg-green-400">
            important Links
          </div>
          <div className="digitalIndia mx-28">
            <Image
              src="/schema.jpg"
              width={700}
              height={300}
              alt="Picture of the author"
              className="w-full"
            />
          </div>
        </div>
        <div className="secondTopDiv border border-yellow-400 flex flex-wrap justify-center gap-6 my-4">
          <div className="trendingLinks w-[300px] h-[500px] bg-gray-500 ">
            Trending Links
          </div>
          <div className="main w-[600px] h-[500px] bg-gray-600">
            Available Services
          </div>
          <div className="manager w-[300px] h-[500px] bg-gray-700">Manager</div>
        </div>
        <div className="thirdTopDiv flex flex-wrap gap-4 justify-center my-4">
          <div className="stateLinks w-[400px] h-[400px] bg-lime-600"></div>
          <div className="nationLinks w-[400px] h-[400px] bg-lime-600"></div>
          <div className="collegeLinks w-[400px] h-[400px] bg-lime-600"></div>
        </div>
        <div className="available my-4 border border-white py-10 text-center">
          <h1 className="font-bold text-2xl">Available Services</h1>
          <p>
            INCOME CERTIFICATE | CAST CERTIFICATE | DOMICILE CERTIFICATE | BIRTH
            CERTIFICATE | DEATH CERTIFICATE | PAN CARD | AADHAR CARD PRINT |
            E-SHRAM | AAYUSHMAN CARD | PM MAANDHAN | PASSPORT ONLINE |
            SCANNING/LAMINATION | ELECTRICITY BILL | DATA ENTRY | CSC ONLINE |
            ALL TYPES ONLINE FORM | RAILWAY TICKET | ALL TYPE INSURANCE | MONEY
            TRANSFER ETC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
