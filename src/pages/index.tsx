import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Bookmarklet from '@/components/bookmarklet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Bookmarklet name="darkmode" desc={`uses DarkReader's api to change a site to darkmode (useful if you can't install extensions)`} />
      <Bookmarklet name="freenom" desc={`perform fast-checkout on freenom or something. see rammerhead docs for more info`} />
      <Bookmarklet name="kahoot" desc={`(:`} />
      <Bookmarklet name="screenshot" desc={`takes a screenshot of the current page. why? idk someone in an issue needed to take a screenshot for a bug report or something but their disctrict blocked screenshots of all things, so I made this for them and they never used it but I still do for fun...`} />
      <Bookmarklet name="ytdl" desc={`highly configurable bookmarklet for downloading videos (real)`} />
    </main>
  )
}
