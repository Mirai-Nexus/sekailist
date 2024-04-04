import "./style.css"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Slider() {
    const mediaList = [
        { id: 1, type: 'image', src: '/banner/banner.png', alt: 'Banner', width: "100%", height: "100%" },
        { id: 2, type: 'image', src: '/banner/banner2.png', alt: 'Banner2' },
        { id: 3, type: 'image', src: '/banner/banner3.jpg', alt: 'Banner3' },
        { id: 4, type: 'image', src: '/banner/banner4.jpg', alt: 'Banner4' },
        { id: 5, type: 'image', src: '/banner/banner5.jpg', alt: 'Banner5' },
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
                    <input type="radio" name="slide" id="slide1" checked />
                    <Image src={imagem.src} alt={imagem.alt} sizes="100%" fill />
                </div>
            )}
            <div className="navigation">
                <label className="bar"></label>
                <label className="bar"></label>
                <label className="bar"></label>
                <label className="bar"></label>
                <label className="bar"></label>
            </div>
        </div>
    )
}