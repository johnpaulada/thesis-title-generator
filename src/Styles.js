import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #333;
`

export const Header = styled.h2`
    color: white;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    font-size: 2em;
    text-align: center;
    margin-left: 10vw;
    margin-right: 10vw;
`

export const GenerateButton = styled.button`
    background: none;
    color: white;
    border: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    letter-spacing: 5px;
    font-size: 1.5em;
    cursor: pointer;
    outline: none;
`