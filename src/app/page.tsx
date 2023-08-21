import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main>
      <Slider/>
    </main>
  )
}
