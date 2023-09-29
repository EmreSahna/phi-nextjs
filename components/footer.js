export default function Footer() {
    return (
        <footer>
            <div className="bg-yrblack">
                <div className="max-w-[1000px] mx-auto text-[#fff]">
                    <div className="flex items-center justify-start">
                        <div className="h-[60px] p-1">
                            <img src="/logo.png" alt="PhiHaber" className="h-full w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-yblue py-6">
                <div className="max-w-[1000px] mx-auto font-medium grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
                    <div className="col-span-2 sm:col-span-1">
                        <ul className="space-y-4 text-sm text-gray-300 font-medium">
                            <li>
                                <a href="/kunye" className="hover:opacity-75">
                                    Künye
                                </a>
                            </li>
                            <li>
                                <a href="/feed.xml" className="hover:opacity-75">
                                    RSS
                                </a>
                            </li>
                            <li>
                                <a href="/iletisim" className="hover:opacity-75">
                                    İletişim
                                </a>
                            </li>
                            <li>
                                <a href="/hakkimizda" className="hover:opacity-75">
                                    Hakkımızda
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <ul className="space-y-4 text-sm text-gray-300 font-medium">
                            <li>
                                <a href="/kategori/son-dakika" className="hover:opacity-75">
                                    Son Dakika
                                </a>
                            </li>
                            <li>
                                <a href="/kategori/ekonomi" className="hover:opacity-75">
                                    Ekonomi
                                </a>
                            </li>
                            <li>
                                <a href="/kategori/teknoloji" className="hover:opacity-75">
                                    Teknoloji
                                </a>
                            </li>
                            <li>
                                <a href="/kategori/spor" className="hover:opacity-75">
                                    Spor
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <ul className="space-y-4 text-sm text-gray-300 font-medium">
                            <li>
                                <a href="/kategori/kultur-ve-sanat" className="hover:opacity-75">
                                    Kültür Ve Sanat
                                </a>
                            </li>
                            <li>
                                <a href="/kategori/gundem" className="hover:opacity-75">
                                    Gündem
                                </a>
                            </li>
                            <li>
                                <a href="/kategori/dunya" className="hover:opacity-75">
                                    Dünya
                                </a>
                            </li>
                            <li>
                                <a href="/kategori/politika" className="hover:opacity-75">
                                    Politika
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <ul className="space-y-4 text-sm text-gray-300 font-medium">
                            <li>
                                <a href="https://twitter.com/phihaber" className="hover:opacity-75">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:opacity-75">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:opacity-75">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-ychar py-4">
                <div className="max-w-[1000px] mx-auto">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs text-[#fff] text-center">
                            &copy; 2023. PhiHaber. All rights reserved.
                        </p>
                        <ul className="mt-4 flex flex-wrap justify-center gap-4 text-xs sm:mt-0 lg:justify-end">
                            <li>
                                <a href="/hukum-ve-kosullar" className="text-[#fff] transition hover:opacity-75">
                                    Hükümler & Koşullar
                                </a>
                            </li>
                            <li>
                                <a href="/gizlilik-politikasi" className="text-[#fff] transition hover:opacity-75">
                                    Gizlilik Politikası
                                </a>
                            </li>
                            <li>
                                <a href="/cerezler" className="text-[#fff] transition hover:opacity-75">
                                    Çerezler
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}