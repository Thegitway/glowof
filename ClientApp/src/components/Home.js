import React, { Component } from 'react';
import styled from 'styled-components';


const Pic=styled.img`
flex:1;
width: 30vw;
padding: 4%;
border-radius: 20px;
`
const Box=styled.div`
background-color:coral;
      height:100vh;
      width:100vw;
      display:flex;
     flex-direction:column;
    align-items:center;
     justify-content:center;
`

const PicBox=styled.div`
flex:1;
display:flex;
flex-direction:column;
 height:60vh;
 align-items:center;
  justify-content:center;
`

const Pub=styled.div`
display:flex;

`
const Text=styled.div`
padding:0% 4% 0% 9%;`

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <Box>
        <h1 >Welcome to GlowOf</h1>
        <p>Hello World</p>
        <Pub>
        <PicBox >
<Pic src="pro1.png"></Pic>
<Text >Free gifts | Save on your skin &amp; body faves while bagging some incredible free treats</Text>
        </PicBox>
        <PicBox>
<Pic src="pro2.png"></Pic>
<Text >Free gifts | Save on your skin &amp; body faves while bagging some incredible free treats</Text>

        </PicBox>
        <PicBox>
<Pic src="pro3.png"></Pic>
<Text >Free gifts | Save on your skin &amp; body faves while bagging some incredible free treats</Text>

        </PicBox>
        </Pub>
      </Box>
    ); 
  }
}
