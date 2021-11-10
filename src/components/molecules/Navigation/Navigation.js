import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="flex gap-6 items-center">
      <Link href="/editor">
        <a className="py-2 px-6 text-lg font-bold text-white bg-172A50 hover:bg-2D4575 rounded-lg shadow-lg hover:shadow-xl transition-all">
          製作地圖
        </a>
      </Link>
      <Link href="/">
        <a className="text-lg font-bold text-172A50">使用說明</a>
      </Link>
      <Link href="/">
        <a className="text-lg font-bold text-172A50">關於我們</a>
      </Link>
    </div>
  )
}
