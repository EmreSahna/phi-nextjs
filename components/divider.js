import clsx from "clsx";

export default function Divider(props){
    return <div className={clsx("w-full h-[1.2px] bg-[#DEE2E6] rounded-full", props.className)} />
}