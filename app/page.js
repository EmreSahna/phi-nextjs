import {getAnasayfaUstKisim} from "@/lib/api";
import UcluRow from "@/components/uclu-row";
import IkiliSlider from "@/components/ikili-slider";

export default async function Home() {
    const posts = await getAnasayfaUstKisim()
    const ucluRow = posts.slice(0, 3)
    const ikiliSlayt = posts.slice(3, 11)

    return (
        <>
            <div className="mx-auto max-w-[1180px] my-6">
                <UcluRow news={ucluRow}/>
                <IkiliSlider news={ikiliSlayt}/>
            </div>
        </>
    )
}

/*
<div className="py-4">
    <div className="max-w-[1180px] mx-auto">
        <AnasayfaLatest news={first.slice(0,4)}/>
    </div>
</div>
<div className="max-w-[1180px] mx-auto py-4">
                <RowGenis news={first.slice(4,7)} />
            </div>
 */

/*
<div className="py-4">
    <div className="max-w-[1180px] mx-auto">
        <div className="bg-yblue text-center py-1">
            <span className="font-semibold text-[20px] text-[#fff]">Son Dakika</span>
        </div>
        <RowHaber news={sondakika}/>
    </div>
</div>
 */