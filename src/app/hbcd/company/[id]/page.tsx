import React from 'react'
import { hbcdCompanyData } from "@/data/sampleData";
import Image from "next/image";
import { HBCDCompany } from '@/data/types';
import Link from 'next/link';

export default function Page({ params }: { params: { id: string } }) 
{
  const company = hbcdCompanyData.filter((e) => e.bizID===params.id)
  const singleCompany = company? company[0]: null;
  if (singleCompany) {
    let roomLinkList = null;
    if (singleCompany.coldRoom_RIDs && singleCompany.coldRoom_RIDs.length > 0) {
      roomLinkList = singleCompany.coldRoom_RIDs?.map((e)=> (
        <li key={e} className='hover:text-blue-500'>room <Link href={`/hbcd/coldRoom/${e}`}>{e}</Link></li>
      ))
  }
  return (
      <div className="p-4 text-black h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
      {/* TEXT CONTAINER */}
      <h1 className="text-3xl font-bold uppercase xl:text-5xl text-blue-500">{singleCompany.name}</h1>
      <div className="my-2">
        <p className='p-2'><span className="font-bold text-gray-600">Address:</span> {singleCompany.officeAddress}</p>
        <p className='p-2'><span className="font-bold text-gray-600">Tel:</span> {singleCompany.officeTelNo}</p>
        <p className='p-2'><span className="font-bold text-gray-600">Biz Type:</span> {singleCompany.bizType}</p>
        <p className='p-2'><span className="font-bold text-gray-600">Lincense no.:</span> {singleCompany.licenseNo}</p>
        <p className='p-2'><span className="font-bold text-gray-600">Province:</span> {singleCompany.province}</p>
        <p className='p-2'><span className="font-bold text-gray-600">Number of Cold Rooms:</span> {singleCompany.coldRoom_RIDs?.length}</p>
        {roomLinkList && <div className='px-2'>List of cold rooms: <ul className='mx-4'>{roomLinkList}</ul></div>}
        </div>
      </div>
  )}
  else {
    return <div className='text-red'>Not found the company with bizId {id}</div>
  }
};
