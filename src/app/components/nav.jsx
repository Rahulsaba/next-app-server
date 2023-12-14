import Link from "next/link";

export default function Nav() {
    return (
        <header>
            <nav
                className="flex items-center justify-center p-6 lgLpx-8 h-20 border border-t-0 border-r-0 border-b-gray-600"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-l.5 p-1.5">
                        Next.js Authentication
                    </Link>
                </div>
                <Link href="/main-dashboard" className="px-5">Dashboard</Link>
                <Link href="/getuser" className="px-5">User</Link>
                <Link href="/login" className="px-5">Login</Link>
                <Link href="/register" className="px-5">Register</Link>
            </nav>
        </header>
    )
}