
import styled,{keyframes} from "styled-components"


const Scaffold=styled.div`
width: 90vw;
height: 90vh;
background-color: white;
`

const Image=styled.img`
   object-fit:cover;
  width: 40vw;
  height: 90vh;
  border-radius: 0px;
`

const Column=styled.div`
display: flex;
margin-left: 5%;
justify-content: start;
align-items: start;
flex-direction: column;
`
const Row=styled.div`
display: flex;
padding:3%;
justify-content: space-between;
align-items: flex-start;
`
const Title=styled.h1`
font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: 200;
`
const Price=styled.div`
font-weight: 100;
font-size: 40px;
font-family: Georgia, 'Times New Roman', Times, serif;

`
const Info=styled.div`
margin: 10px 0px;
font-family: Georgia, 'Times New Roman', Times, serif;

`
const ContainerImage=styled.div`
display: flex;
margin-top: 5%;
align-items: center;
justify-content: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 8rem 1rem;
  font-size: 1.2rem;
`;

export default function Details() {
 
 
  
  return (
    <Scaffold>
    <Row>
    <Image flex="1" src={"user.png"}/>
   <Column>
    <Title >
      OUMAIMA AFRAOUI
    </Title>
    <Info>
    A princess is the daughter of a king or queen, or the wife of a prince. Some children like to have princess parties because they get to wear fancy dresses, tiaras, and little plastic high heels. In countries that are monarchies, rulers are born into their positions and are typically called kings and queens.    </Info>
    <Price>Wydad 37</Price>
    </Column>
    </Row>
      
    </Scaffold>
  )
  
}