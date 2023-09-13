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
