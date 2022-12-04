import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import StoreArticle from './StoreArticle'
import storedata from './assets/storedata.json'

const StorePage = () => {
  const Container = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: auto auto;
    width: inherit;
    background-image: linear-gradient(lightblue, darkblue);
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80vw;
    margin-top: 8rem;
    text-align: justify;
  `
  return <Container>
    <BackBtn to='/'>
      <AiOutlineArrowLeft size={'2em'}/>
      <Label>A Inicio</Label>
    </BackBtn>
    <Gallery>
      {
        storedata.map(item => { return <StoreArticle {...item}/> })
      }
    </Gallery>
  </Container>
}

export default StorePage