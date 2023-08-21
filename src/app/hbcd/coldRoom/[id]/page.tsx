import React from "react";
import Link from 'next/link';

import { coldRoomsData, hbcdCompanyData } from "@/data/sampleData";

export default function Page({ params }: { params: { id: string } }) {
  const coldRoom = coldRoomsData.filter((e) => e.RID === params.id);
  const singleColdRoom = coldRoom ? coldRoom[0] : null;
  if (singleColdRoom) {
    // const company = hbcdCompanyData.find(
    //   (e) => singleColdRoom.bizID === e.bizID
    // ); // relationship to HBCDCompany
    return (
        <div className="text-black mt-8 h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        {/* TEXT CONTAINER */}
        <h1 className="text-xl uppercase xl:text-2xl text-blue-400">
          <Link href={`/hbcd/company/${singleColdRoom.bizID}`} className="hover:text-blue-600">{singleColdRoom.bizName}</Link>
        </h1>
          <h1 className="text-3xl font-bold uppercase xl:text-5xl text-blue-500">
            <span className="text-xl font-bold uppercase xl:text-2xl text-blue-300">ห้องเย็น:</span> {singleColdRoom.RID}
          </h1>
          <div className="grid grid-cols-2">
            <p><span className="font-bold text-gray-600">ที่อยู่:</span>{" "}
            {singleColdRoom.coldRoomAddress}</p>
            <p><span className="font-bold text-gray-600">ตำบล:</span>{" "}
            {singleColdRoom.tambon}</p>
          <p>
            <span className="font-bold text-gray-600">อำเภอ:</span>{" "}
            {singleColdRoom.amper}
          </p>
          <p>
            <span className="font-bold text-gray-600">จังหวัด.:</span>{" "}
            {singleColdRoom.province}
          </p>
          </div>
          <p>
            <span className="font-bold text-gray-600">ประเภทธุรกิจ:</span>{" "}
            {singleColdRoom.productType}
          </p>

          <div className="grid grid-cols-2">
          <h2 className="col-span-2 my-2 font-bold text-xl">ขนาดห้อง: </h2>
          <p>
            <span className="font-bold text-gray-600">ความกว้าง (เมตร):</span>{" "}
            {singleColdRoom.roomWidth}
          </p>
          <p>
            <span className="font-bold text-gray-600">ความยาว (เมตร):</span>{" "}
            {singleColdRoom.roomLength}
          </p>
          <p>
            <span className="font-bold text-gray-600">ความสูง (เมตร):</span>{" "}
            {singleColdRoom.roomHeight}
          </p>
          <p>
            <span className="font-bold text-gray-600">
              น้ำหนักโฟม (กก. (โดยประมาณ)):
            </span>{" "}
            {singleColdRoom.foamMass}
          </p>
          <h2 className="col-span-2 my-2 font-bold text-xl">อุณหภูมิ: </h2>
          <p>
            <span className="font-bold text-gray-600">อุณหภูมิต่ำสุด:</span>{" "}
            {singleColdRoom.minTemp}
          </p>
          <p>
            <span className="font-bold text-gray-600">อุณหภูมิต่ำสุด:</span>{" "}
            {singleColdRoom.maxTemp}
          </p>

          <h2 className="my-2 col-span-2 font-bold text-xl">การสร้าง: </h2>
          <p>
            <span className="font-bold text-gray-600">ปีที่สร้าง:</span>{" "}
            {singleColdRoom.year}
          </p>
          <p>
            <span className="font-bold text-gray-600">ลักษณะโครงสร้าง:</span>{" "}
            {singleColdRoom.constructionType}
          </p>
          <p>
            <span className="font-bold text-gray-600">Panel Class:</span>{" "}
            {singleColdRoom.panelClass}
          </p>
        </div>
        <div>
      </div>
      </div>
    );
  } else {
    return (
      <div className="text-red">Not found the company with bizId {id}</div>
    );
  }
}
