export default function Footer() {
    return (
        <footer className="text-ylaven">
            <div className="bg-yrblack">
                <div className="max-w-[1000px] mx-auto text-[#fff]">
                    <div className="flex items-center justify-start">
                        <div className="h-[60px] p-1">
                            <img src="/logo.png" alt="PhiHaber" className="h-full w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm text-center py-4 bg-ychar">&copy; 2023 PhiHaber. All rights reserved.</p>
        </footer>
    )
}