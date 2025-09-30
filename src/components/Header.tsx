import Link from "next/link";


export default function Header(){
    return(
        <div className="flex">
            <div>LoGO</div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/contato">Contato</Link>
            </nav>
        </div>
    )
}