import Link from "next/link";

export default function Bookmarklet(props: any) {
	const code: string = `javascript:fetch("https://cdn.jsdelivr.net/gh/RuralAnemone/bookmarklets/public/${props.name}.js").then((data=>data.text())).catch((e=>alert(e))).then((text=>eval(text))).catch((e=>alert(e)));`
	return (
		<div className="border-2 border-x-white p-10 m-10 text-center">
		<a className="text-2xl underline text-blue-400" href={code}><h3>{props.name}</h3></a>
			<p>{props.desc}</p>
		</div>
	);
}