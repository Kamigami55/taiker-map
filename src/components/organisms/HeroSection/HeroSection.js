import cn from 'classnames'
import Link from 'next/link'

import Section from '@/components/molecules/Section'

import styles from './HeroSection.module.scss'

export default function HeroSection() {
  return (
    <Section>
      <div
        className={cn(
          styles.heroSectionInner,
          'bg-contain bg-center	bg-no-repeat w-full min-h-[400px] relative my-16'
        )}
      >
        <div className="absolute top-[30%] left-[14%] w-56 text-172A50">
          <h1 className="mb-6 text-4xl font-bold">
            簡單好用的
            <br />
            地圖編輯器！
          </h1>

          <p className="mb-6">
            提供給商家或是旅行團
            <br />
            簡單好上手的地圖編輯器
          </p>

          <Link href="/editor">
            <a className="inline-block py-3 px-8 text-lg font-bold text-white bg-172A50 hover:bg-2D4575 rounded-lg shadow-lg hover:shadow-xl transition-all">
              製作地圖
            </a>
          </Link>
        </div>
      </div>
    </Section>
  )
}
