export default function Footer() {
    return (
        <footer className="text-ylaven">
            <div className="bg-yrblack">
                <div className="max-w-[1000px] mx-auto text-[#fff]">
                    <div className="flex items-center justify-start">
                        <div className="h-[60px] p-1">
                            <img src="/logo_2_2.png" className="h-full w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-yblue py-2">
                <div className="grid grid-cols-4 gap-8 my-3 mx-auto max-w-[1000px]">
                    <ul className="text-sm items-start">
                        <li className="p-1"><a href="/son-dakika" className="hover:text-gray-300">Son Dakika</a></li>
                        <li className="p-1"><a href="/dunya" className="hover:text-gray-300">Dünya</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Ekonomi</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Politika</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Teknoloji</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Trend</a></li>
                    </ul>
                    <ul className="text-sm items-start">
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Bilim</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Sağlık</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Magazin</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Yaşam</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Spor</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Kültür Sanat</a></li>
                    </ul>
                    <ul className="text-sm items-start">
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                    </ul>
                    <ul className="text-sm items-start">
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                        <li className="p-1"><a href="#" className="hover:text-gray-300">Boş</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-sm text-center py-4 bg-ychar">&copy; 2023 PhiHaber. All rights reserved.</p>
        </footer>
    )
}