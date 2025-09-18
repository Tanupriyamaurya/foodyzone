import {useEffect, useState} from 'react';

import styled from 'styled-components'
import SearchResult from './components/SearchResult/SearchResult';
 export const BASE_URL="http://localhost:9000";
const App=()=>{
const[data,setData]=useState(null);
const[filteredData,setFilteredData]=useState(null);
const[loading,setLoading]=useState(false);
const[error,setError]=useState(null);
const[selectedBtn,setSelectedBtn]=useState("all");


useEffect(()=>{
const fetchFoodData= async()=>{
  setLoading(true);
  
  try{
    const response=await fetch(BASE_URL);
  const json= await response.json();
  setData(json);
  setFilteredData(json);
  setLoading(false);
  }catch(error){
setError("unable to fetch data");
  }
};
fetchFoodData()
},[]);
// fetchFoodData();
console.log(data);

const searchFood=(e)=>{
const searchValue=e.target.value;
console.log(searchValue);
if(searchValue===""){
  setFilteredData(null);
}
const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))
setFilteredData(filter);
};
const filterFood=(type)=>{
  if(type==="all"){
    setFilteredData(data);
    setSelectedBtn("all");
    return;
  }
const filter=data?.filter((food)=>
  food.type.toLowerCase().includes(type.toLowerCase()));
setFilteredData(filter);
setSelectedBtn(type);

}
const filterBtn=[
  {
    name:"All",
    type:"all",
  },
  {
    name:"Brealfast",
    type:"breakfast",
  },
  {
    name:"Lunch",
    type:"lunch",
  },
  {
    name:"Dinner",
    type:"dinner",
  }
]
if(error){
  return<div>{error}</div>;
}
if(loading) return <div>loading....</div>
return (
<>
<Container>
<TopContainer>
  <div className="logo">
    <img src='/logo.png' alt="logo"></img>
  </div>
  <div className="search">
    <input onChange={searchFood}placeholder="Search Food"/>
  </div>
</TopContainer>
<FilterContainer>
  {filterBtn.map((value)=>(
  <Button  key={value.name}onClick={()=>filterFood(value.type)}>
    {value.name}</Button>

  ))}
  {/* <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
  <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
  <Button onClick={()=>filterFood("dinner")}>Dinner</Button> */}
</FilterContainer>
</Container>
<SearchResult data={filteredData}/>

</>
);
};
export default App;

 export const Container=styled.div`
background-color:#323343;
max-width:1400px;
margin:0 auto;
padding:0 1rem;
// height:240px;
// min-height:calc(100vh-210px);


`;
const TopContainer=styled.section`
min-height:140px;
display:flex;
justify-content:space-between;
padding:16px;
align-items:center;

gap:12px;
flex-wrap:wrap;
.search input{
background-color:transparent;
border:1px solid red;
color:white;
border-radius:5px;
width:clamp(180px,25vw,300px);
height:30px;
padding:0 8px;
font-size:1rem;
}
@media(<width<600px){
flex-direction:column;
height:80px;}}`;
export const Button=styled.button`
background-color:#ff4343;
border-radius:6px;
padding:6px 12px;
color:white;
border:none;
min-width:80px;
font-size:1rem;
height:auto;
cursor:pointer;
margin:5px;
border:none;
&:hover{
background-color:#e63232;
}
`;
const FilterContainer=styled.section`
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:12px;
padding-bottom:40px;
`;

const FoodCard=styled.div``;
