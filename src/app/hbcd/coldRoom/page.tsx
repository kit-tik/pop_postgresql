import { coldRoomsData } from "@/data/sampleData";
import Link from "next/link";

export default function Page() {
  return (
      <div className="p-4 lg:px-20  items-center">
        {/* <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col gap-2 md:flex-row items-center"> */}
        <h1 className="text-3xl font-bold">Cold Room Page</h1>
        <div className="mt-4 inline-block rounded-xl border shadow-2xl">
        <table className="table-fixed  border border-slate-400 rounded-lg">
        <caption className='text-xl m-4'>List of Cold Rooms</caption>
        <thead>
          <tr className='bg-blue-500 text-white border border-slate-300 rounded-t-md'>
            <th className="p-4 border border-slate-300 text-center">RID</th>
            <th className="p-4 border border-slate-300 text-center">Biz ID</th>
            <th className="p-4 border border-slate-300 text-center">ที่ตั้งห้องเย็น</th>
            <th className="p-4 border border-slate-300 text-center">จังหวัด</th>
          </tr>
        </thead>
        <tbody>
        {coldRoomsData.map((room) => (
          <tr key={room.RID} className="odd:bg-blue-500/20 even:bg-white border border-slate-300 last:rounded-b-lg">
          <td className="border border-slate-300 text-center p-4">
          <Link
                href={`/hbcd/coldRoom/${room.RID}`}
                className="hover:text-blue-500"
                // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
              >{room.RID}
        </Link>
        </td>
        <td className="border border-slate-300 text-center p-4">
              <Link
                    href={`/hbcd/company/${room.bizID}`}
                    className="hover:text-blue-500"
                    // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
                  >{room.bizID}
            </Link>
            </td>
          <td className="border border-slate-300 p-4 ">{room.coldRoomAddress.substring(0,40)}</td>
          <td className="border border-slate-300 p-4 ">{room.province}</td>
        </tr>))}
        </tbody>
      </table>
      </div>
      </div>
    )
  

    // <div>
    //   <h1 className="col-span-2">Cold Room Page</h1>
    //   <div className="p-4 lg:px-20 xl:px-40 min-h-0 md:flex md:flex-col md:flex-wrap gap-2 items-center justify-stretch">
    //     {coldRoomsData.map((room, idx) => (
    //       <Link
    //         href={`/hbcd/coldRoom/${room.RID}`}
    //         key={room.RID}
    //         className="w-full bg-cover p-8 md:h-1/2 odd:bg-blue-500/20 bg-blue-800/20 rounded-md"
    //         // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
    //       >
    //         <div className={`w-full`}>
    //           <h1 className="uppercase font-bold text-xl">{room.coldRoomAddress.substring(0,40)}</h1>
    //           <p className="text-sm my-4">{room.province}</p>
    //           <button className="hidden xl:block bg-amber-300 text-amber-700 py-2 px-4 rounded-md">
    //             Explore
    //           </button>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  // );
}
