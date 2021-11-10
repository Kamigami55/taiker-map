import Image from 'next/image'
import Link from 'next/link'

import Section from '@/components/molecules/Section'

const ShowcaseImages = [
  { id: '1', name: '標準', imageSrc: '/images/mapTheme/standard.png' },
  { id: '2', name: '懷舊', imageSrc: '/images/mapTheme/retro.png' },
  { id: '3', name: '深夜', imageSrc: '/images/mapTheme/night.png' },
  { id: '4', name: '暗黑', imageSrc: '/images/mapTheme/dark.png' },
  { id: '5', name: '銀白', imageSrc: '/images/mapTheme/silver.png' },
  { id: '6', name: '深藍', imageSrc: '/images/mapTheme/aubergine.png' },
]

export default function ShowcaseSection() {
  return (
    <Section className="my-10">
      <h2 className="mb-16 text-xl font-bold text-172A50">地圖展示</h2>
      <div className="flex overflow-x-scroll gap-[72px] items-center pb-4 mb-16">
        {ShowcaseImages.map(({ id, name, imageSrc }) => (
          <div key={id} className="relative flex-shrink-0 w-[300px] h-[240px]">
            <Image
              src={imageSrc}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-[56px]"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/editor">
          <a className="inline-block py-3 px-8 text-lg font-bold text-white bg-172A50 hover:bg-2D4575 rounded-lg shadow-lg hover:shadow-xl transition-all">
            製作地圖
          </a>
        </Link>
      </div>
    </Section>
  )
}
