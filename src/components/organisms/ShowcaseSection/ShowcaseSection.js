import Image from 'next/image'
import Link from 'next/link'

import Section from '@/components/molecules/Section'

const ShowcaseImages = [
  { id: '1', name: '宜蘭一日遊地圖', imageSrc: '/images/sampleMaps/yilan.png' },
  { id: '2', name: '蘭嶼景觀地圖', imageSrc: '/images/sampleMaps/lanyu.png' },
  { id: '3', name: '金門星光節住宿地圖', imageSrc: '/images/sampleMaps/kinmen.png' },
  { id: '4', name: '基隆美食地圖', imageSrc: '/images/sampleMaps/keelong.png' },
]

export default function ShowcaseSection() {
  return (
    <Section className="my-10">
      <h2 className="mb-16 text-xl font-bold text-172A50">地圖展示</h2>
      <div className="flex overflow-x-scroll gap-[72px] items-center pb-4 mb-16">
        {ShowcaseImages.map(({ id, name, imageSrc }) => (
          <div key={id} className="flex relative flex-col flex-shrink-0 gap-4 items-center">
            <a href={imageSrc} target="_blank" rel="noopener noreferrer">
              <div className="relative w-[300px] h-[240px]">
                <Image
                  src={imageSrc}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[56px]"
                />
              </div>
            </a>
            <p className="text-172A50">{name}</p>
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
