import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import styled from 'styled-components'

const StoriesPage = () => {
  const Container = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: auto auto;
    width: inherit;
    height: 100vh;
    background-image: linear-gradient(lightblue, white);
  `
  const BackBtn = styled(Link)`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: darkblue;
  `
  const Label = styled.p`
    margin-left: 6px;
    font-weight: bold;
  `
  const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    background-color: white;
    margin-top: 8rem;
    padding-block: 40px;
    padding-inline: 40px;
    text-align: justify;
  `
  return <Container>
    <BackBtn to='/'>
      <AiOutlineArrowLeft size={'2em'}/>
      <Label>A Inicio</Label>
    </BackBtn>
    <Gallery>
      <img src='/Atacamex.jpeg'/>
      <img src='/Nota_IMO.png'/>
    </Gallery>
    <Gallery>
      <p>1. Downwind entre 1957 y 1958 descendieron hasta los 8050 m, estimaron por primera vez su profundidad.</p>
      <p>2. Southtow en 1972 descendieron hasta 7196 m, identificaron a través de fotografías que la abundancia de anfípodos aumentaba con la profundidad y que otros grupos como peces, decápodos y octópodos mostraban registros ocasionales centrados en capas más someras (2000-4000 m).</p>
      <p>3. Atacama Trench International Expedition (ATIE) en 1997 descendieron hasta 7800 m, identificaron especies de anfípodos del género Eurythenes, revelaron el alto contenido de materia orgánica de los sedimentos y la gran abundancia de nematodos en el lecho marino.</p>
      <p>4. SONNE en 2010 descendieron hasta 8074 m, reportaron el primer registro de un pez baboso de la familia Liparidae.</p>
      <p>5. ATACAMEX y SONNE en 2018 descendieron hasta 8081m, identifican una especie de anfípodo endémica denominada Eurythenes atacamensis</p>
      <p>6. Hadal en 2022 descendieron hasta 8081 m, primera inmersión tripulada.</p>
    </Gallery>
  </Container>
}

export default StoriesPage