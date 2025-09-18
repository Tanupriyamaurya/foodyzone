import React from 'react'
import styled from "styled-components";
import { BASE_URL, Button } from '../../App';


const SearchResult = ({data:foods}) => {
  return (
    <div>
      <FoodCardContainer>
        <FoodCards>
            {
                foods?.map((food)=><FoodCard key={food.name}> 
                <div  className="food_image">
                    <img src={BASE_URL+food.image}/>
                </div>
                    <div className="food_info">
                      <div className="info">
                        <h3>  {food.name}</h3>
                        <p>{food.text}</p>
                      </div>
                      <Button>${food.price.toFixed(2)}</Button>
                    </div>
                </FoodCard>)
            }
        </FoodCards>
      </FoodCardContainer>
    </div>
  )
}

export default SearchResult
const FoodCardContainer=styled.section`
min-height:calc(100vh -210px);
background-size: cover;
max-width:1400px;
background-image:url("/bg.png");
display:flex;
align-items:center;
background-position: center;
justify-content:center;
margin: 0 auto;
padding:16px;
width:100%;
;`
const FoodCards=styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
gap:16px;
// width:100%;`;
const FoodCard=styled.div`
box-sizing:border-box;
flex:1 1 300px;
max-width:420px;
// height:167px;
display:flex;
flex-direction:row;
border:2px solid grey;
margin:8px;
border-radius:6px;
color:white;
.food_image{
flex:1 1 40%;
max-width:150px;}

img{
width:100%;
height:100%;
max-height:140px;
object-fit:cover;
border-radius:6px;
}
.food_info{
  display:flex;
 flex-direction:column;
 align-items:end;
 justify-content:space-between;
 .info{
 text-align:left;
 width:100%;}
 button{
 width:auto;
 max-width:120px;
 font-size:1rem;
 padding-bottom:3px;
 }
}
`;
