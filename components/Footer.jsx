import Link from "next/link"
import { Input } from "./ui/input"
import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/60">Be the first to get the latest news about trends, promotions and much more!</p>
          </div>
          {/* form */}
          <form className="flex clex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder='Your email address'/>
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent">
              Join
            </button>
          </form>
          {/* socials */}
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-1">
            <Link href='https://github.com/RawAtCode' target='_blank'>
              <RiYoutubeFill />
            </Link>
            <Link href='https://github.com/RawAtCode' target='_blank'>
              <RiTwitterFill />
            </Link>
            <Link href='https://github.com/RawAtCode' target='_blank'>
              <RiFacebookFill />
            </Link>
            <Link href='https://github.com/RawAtCode' target='_blank'>
              <RiInstagramFill />
            </Link>
            <Link href='https://github.com/RawAtCode' target='_blank'>
              <RiPinterestFill />
            </Link>
          </div>
          <p className="text-white/70 mb-1">&#169; 2024</p>
        </div>
      </div>
      {/* copyright */}
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 GearGrove. All rights reserved.
        <p className="text-white/50">Developed by <a href="https://github.com/RawAtCode" target='_blank'>RawAtCode</a></p>
      </div>
    </footer>
  )
}

export default Footer