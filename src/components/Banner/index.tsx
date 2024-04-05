import "./style.css"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Banner() {
    const mediaList = [
        { id: 1, type: 'image', src: '/banner/banner.png', alt: 'Banner', idInput: "slide1 s1"},
        { id: 2, type: 'image', src: '/banner/banner2.png', alt: 'Banner2', idInput: "slide2" },
        { id: 3, type: 'image', src: '/banner/banner3.jpg', alt: 'Banner3', idInput: "slide3" },
        { id: 4, type: 'image', src: '/banner/banner4.jpg', alt: 'Banner4', idInput: "slide4" },
        { id: 5, type: 'image', src: '/banner/banner5.jpg', alt: 'Banner5', idInput: "slide5" },
    ]
    const [contador, setContador] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            setContador((contador) => (contador + 1) % mediaList.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [contador, mediaList.length]);

    return (
        <div className="Container">
            {mediaList.map((imagem, index) =>
                <div key={imagem.id} style={{ display: index === contador ? 'block' : 'none' }}>
                    <Image src={imagem.src} alt={imagem.alt} sizes="100%" fill className="slides"/>
                </div>
            )}
            <div className="navigation">
                <div className="bar" id="slide0" onClick={(e) => setContador(0)} style={{ backgroundColor: contador === 0 ? 'white' : 'transparent'}}></div>
                <div className="bar" id="slide1" onClick={(e) => setContador(1)} style={{ backgroundColor: contador === 1 ? 'white' : 'transparent'}}></div>
                <div className="bar" id="slide2" onClick={(e) => setContador(2)} style={{ backgroundColor: contador === 2 ? 'white' : 'transparent'}}></div>
                <div className="bar" id="slide3" onClick={(e) => setContador(3)} style={{ backgroundColor: contador === 3 ? 'white' : 'transparent'}}></div>
                <div className="bar" id="slide4" onClick={(e) => setContador(4)} style={{ backgroundColor: contador === 4 ? 'white' : 'transparent'}}></div>
            </div>
        </div>
    )
}