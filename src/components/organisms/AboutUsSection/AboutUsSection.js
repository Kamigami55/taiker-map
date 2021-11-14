/* eslint-disable react/jsx-no-target-blank */
import cn from 'classnames'

import { FiExternalLink } from 'react-icons/fi'

import Section from '@/components/molecules/Section'

import styles from './AboutUsSection.module.scss'

export default function AboutUsSection() {
  return (
    <Section className={cn('my-16 min-h-screen', styles.aboutUsSection)}>
      <h1 className="mb-16 text-3xl font-bold text-172A50">關於我們</h1>

      <h2>作者</h2>

      <h3>EasonChang</h3>
      <ul>
        <li>
          <a href="https://github.com/Kamigami55" target="_blank" rel="noopener noreferrer">
            Github 頁面 @Kamigami55 <FiExternalLink className="inline" />
          </a>
        </li>
        <li>
          <a href="https://www.easonchang.com/" target="_blank" rel="noopener">
            個人網站 <FiExternalLink className="inline" />
          </a>
        </li>
      </ul>

      <h3>Carol</h3>
      <ul>
        <li>
          <a href="https://carol0730.github.io/index.html" target="_blank" rel="noopener">
            個人網站 <FiExternalLink className="inline" />
          </a>
        </li>
      </ul>

      <h2>專案相關資源</h2>
      <ul>
        <li>
          <a
            href="https://www.figma.com/file/svgRjNqA021R2PuPeCZOHc/2021%E7%B2%BE%E7%A5%9E%E6%99%82%E5%85%89%E5%B1%8B?node-id=225%3A1707"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma UI 設計稿 <FiExternalLink className="inline" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Kamigami55/taiwan-tourism-map-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo <FiExternalLink className="inline" />
          </a>
        </li>
      </ul>

      <h2>The F2E 挑戰賽</h2>
      <p>
        這個專案也參與了
        <a
          href="https://2021.thef2e.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          2021 第三屆 The F2E 前端 ＆ UI 修煉精神時光屋 <FiExternalLink className="inline" />
        </a>
        自我挑戰賽，在賽程<b>兩週期間</b>內產出<b>需求、UI 設計稿、及前端程式</b>。
      </p>
      <ul>
        <li>
          <a
            href="https://2021.thef2e.com/users/6296427084285740128?week=1&type=3"
            target="_blank"
            rel="noopener noreferrer"
          >
            專案頁面：UI 設計 <FiExternalLink className="inline" />
          </a>
        </li>
        <li>
          <a
            href="https://2021.thef2e.com/users/6296427084285740128?week=1&type=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            專案頁面：前端程式 <FiExternalLink className="inline" />
          </a>
        </li>
      </ul>
    </Section>
  )
}
