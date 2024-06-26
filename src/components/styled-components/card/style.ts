import styled from "styled-components";

const CardContainer = styled.div`
    min-width: 400px;
    margin: 4rem;
    margin-top: -20px;
    border-top: 7px solid #007732;
    border-radius: 5%;
    background-color: #fff;

    @media screen and (max-width: 900px){
        margin: 2rem;
        width: 15rem;
    }

    @media screen and (max-width: 600px) {
        width: 40rem; 
        margin: 2rem 1rem;
    }
`

const CardImg = styled.img`
    width: 100%;
    height: 15rem;
    padding: 1rem;
    object-fit: contain;

    @media screen and (max-width: 900px){
        height: 10rem;
    }
`

const CardBody = styled.div`
    padding: 0 1.5rem;
    word-wrap: break-word;
    text-align: justify;
    text-justify: inter-word;
`
const CardFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardTitle = styled.h5`
    margin: 0.5rem 0;
`

const CardText = styled.p`
    font-size: 12px;
    margin: 0.5rem 0;
`

const CardButton = styled.button`
    cursor: pointer;
    padding: 0.5rem;
    margin: 1rem 0;
    width: 100%;
    background-color: #fff;
    border: 0;
    border-radius: 2rem;
    color: blue;
    font-weight: bold;
    font-size: 1rem;
`
export { CardContainer, CardImg, CardBody, CardFlex, CardTitle, CardText, CardButton }