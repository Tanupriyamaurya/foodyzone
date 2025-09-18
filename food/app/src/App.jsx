
import styled from 'styled-components'
const App=()=>{
return(
   <MainContainer>
<TopContainer>
  <div className="logo">
    <img src='/logo.png' alt="logo"></img>
  </div>
  <div className="search">
    <input placeholder="Search Food"/>
  </div>
</TopContainer>
</MainContainer>);
}
export default App;

const MainContainer=styled.div`
background-color:#323343;
width:100%;
height:100vh;`;
const TopContainer=styled.section``;

