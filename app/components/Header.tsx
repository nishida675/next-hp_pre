import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-gray-800 py-5">
            <div className="container mx-auto flex justify-start gap-x-16">
                <h1 className="text-white">自己紹介hp</h1>
                <ul className="flex gap-3">
                    <li>
                        <Link href="/" className="text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white">Blog</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white">成果物</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header