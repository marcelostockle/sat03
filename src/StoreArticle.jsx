import React from 'react'
import styled from 'styled-components'

const StoreArticle = (props) => {
  const Article = styled.div`
    width: 30vw;
    margin-bottom: 2rem;
    background-color: white;
    border-style: solid;
    border-radius: 20px;
    border-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const StyledBtn = styled.h3`
    margin-block: 0.5rem;
    border-style: solid;
    border-radius: 14px;
    border-color: black;
    background-color: lightgray;
    text-align: center;
  `
  return <Article>
    <img src={props.pic}/>
    <h3 style={{marginBlock: '0.1rem'}}>{props.title}</h3>
    <h6 style={{marginBlock: '0.1rem'}}>{props.price}</h6>
    <StyledBtn>Comprar</StyledBtn>
  </Article>
}

export default StoreArticle