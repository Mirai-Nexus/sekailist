import "./style.css"
import Image from "next/image"
import { listcard } from "@/data/listcard"
import Link from 'next/link'

export default function AnimeSection(props: {id:string}) {

    const id = props.id

    const slideLeft = () => {
        var slider = document.getElementById(id)
        if(slider) {
            slider.scrollLeft = slider.scrollLeft - 1100
        }
    }

    const slideRight = () => {
        var slider = document.getElementById(id)
        if(slider){
            slider.scrollLeft = slider.scrollLeft + 1100
        }
    }

    return (
        <section>
        <h2 className='name-section'>Animes da temporada</h2>
        <div className='list-section'>
            <Image src={'/icons/arrow-left.svg'} alt="Voltar" onClick={slideLeft} width={40} height={40}  className='arrow' />
            <div id={props.id} className='slider-list'>
                {listcard.map((card) => (
                    <Link key={card.id} href={`anime/${card.id}`}>             
                        <div key={card.id} style={{ backgroundImage: `url(${card.url})`, backgroundSize: "cover"}} className='item-section'/>
                    </Link>
                ))}
            </div>
            <Image src={'/icons/arrow-right.svg'} alt="Avançar" onClick={slideRight} width={40} height={40}  className='arrow' />
        </div>
        </section>
    )
}