import React, { useState, useEffect } from 'react'

export const QuickGallery = () => {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = (true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await (await fetch("http://localhost:3001/all")).json();
            console.log(data);
            setState(data);
            setIsLoading(false);
        }
        fetchData();
    }, [])

    const mapImages = state.map(link => {
        return (
            <div class="card">
                <img class="card-img-top" src={link} style={{width: "100%"}} />
            </div>
        )
    })

    return (
        <section class="gallery">
        <div class="container">
            <h1 class="text-white text-center pt-5">Some of my pictures</h1>
            <div class="card-columns pt-5">
                {mapImages}
            </div>
        </div>
        </section>
    )
}
