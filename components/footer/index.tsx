import Image from "next/image"
import logo from "@/assets/imgs/logo.png";

export default function Footer() {
    return(
        <footer className="py-12  text-light bg-gradient-to-t from-black via-black to-[#FCC383] from-80% w-full">
            <div className="main-width flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <Image 
                        src={logo}
                        width={150}
                        height={80}
                        alt="Nextville logo"
                    />
                    <span>
                        Copyright © 2024 Nextville. All rights reserved.
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="mb-1 block text-sm font-semibold">
                        Nextville AB 
                    </span>
                    <span>
                        Östgötagatan 12
                    </span>
                    <span>
                        Embassy house
                    </span>
                    <span>
                        Stockholm, Sweden
                    </span>
                    <a 
                        href="mailto:info@nextville.com"
                    >
                        info@nextville.com
                    </a>
                </div>
            </div>
        </footer>
    )
}