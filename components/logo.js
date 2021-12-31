import Link from "next/link"

export default function Footer({ children, footer }) {
  return (
    <div className="p-5 text-center">
    <Link href={'/'}>
    <a>
      <img
        src="assets/images/hidmona_logo.png"
        className="img-fluid"
        alt="Image"
        loading="lazy"
      />
    </a>
    </Link>
  </div>
  )
}