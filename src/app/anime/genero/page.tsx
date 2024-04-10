"use client"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import GeneroList from "@/components/generoList"
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { listcard } from "@/data/listcard";
import { Suspense } from 'react'


export default function AnimeGeneroPage() {
    const searchParams = useSearchParams()
    const [ genero, setGenero ] = useState( searchParams.get("var"))

    return (
        <div style={{ overflowX: "hidden", maxWidth: "100vw" }}>
            <NavBar />
            <Suspense>
                <GeneroList objeto={listcard} generoName={genero}/>
            </Suspense>
            <Footer />
        </div>
    )
}