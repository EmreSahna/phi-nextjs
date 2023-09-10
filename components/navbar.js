import {getCategories} from "@/lib/api";

export default async function Navbar() {
    const categories = await getCategories()

    return (
        <header className="text-[#fff] shadow-lg">
            <div className="bg-yrblack">
                <div className="max-w-[1000px] bg-yrblack mx-auto">
                    <div className="flex items-center justify-between h-16 text-[#fff]">
                        <a href="/">
                            <div className="h-[60px] p-1">
                                <img src="/logo_2_2.png" className="h-full w-full object-cover" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-yblue">
                <div className="max-w-[1000px] mx-auto flex py-2 space-x-10 justify-center font-semibold">
                    {
                        categories.map((category,index) => {
                            return (
                                <a key={index} href={category.slug} className="hover:text-ychar">{category.name}</a>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}