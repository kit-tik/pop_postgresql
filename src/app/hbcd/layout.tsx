import Link from "next/link";
export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
      <div className="m-auto bg-blue-500 text-white p-4 my-4 hover:transition-all ease-in-out duration-300 hover:translate-x-2">
        <Link href="/kHbcd">
          <span className="text-bold">ดู</span> ความรู้เกี่ยวกับ HBCD
        </Link>
      </div>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-5 p-4 md:p-6 lg:p-12 max-w-full md:gap-4">
        <aside className="xs:flex xs:flex-row md:col-span-1 border-r-2 border-blue-400 pr-2 md:h-screen">
          <h1 className="hover:text-blue-600"><Link href="/hbcd" scroll={false}>ฐานข้อมูลผู้ถือครอง EPS Panel</Link></h1>
          <ul className="sticky top-4 ml-4">
            <li className="hover:text-blue-600">
              <Link href="/hbcd/company" scroll={false}>
                รายการบริษัท (Companies)
              </Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/hbcd/coldRoom" scroll={false}>
                รายการห้องเย็น (Cold Rooms)
              </Link>
            </li>
          </ul>
        </aside>
        <div className="md:col-span-2 lg:col-span-4">{children}</div>
      </div>
    </>
  );
}
