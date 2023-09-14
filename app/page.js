import {getAnasayfaUstKisim} from "@/lib/api";
import UcluRow from "@/components/uclu-row";
import IkiliSlider from "@/components/ikili-slider";

export default async function Page() {
    const posts = await getAnasayfaUstKisim(30)
    const ucluRow = posts.slice(0, 3)
    const ikiliSlayt = posts.slice(3, 11)

    return (
        <>
            <div className="mx-auto max-w-[1180px] my-6">
                <UcluRow news={ucluRow}/>
                <IkiliSlider news={ikiliSlayt}/>
                <UcluRow news={posts.slice(11,14)} />
                <UcluRow news={posts.slice(14,17)} />
                <UcluRow news={posts.slice(17,20)} />
                <UcluRow news={posts.slice(20,23)} />
                <UcluRow news={posts.slice(23,29)} />
                <UcluRow news={posts.slice(29,30)} />
            </div>
        </>
    )
}
