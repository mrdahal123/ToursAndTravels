import Navbar from "./navbar.js";
import Services from "./Services.js";
import CardsVariables from "../variables/CardsVariables.js";
import { Container, Row, Carousel } from "react-bootstrap";
import Carousell from "./carousell.js";
import { CarouselData } from "../variables/CarouselVariables.js";
import { useEffect , useState } from "react";
import {
    Link
  } from "react-router-dom";
import { Alert } from "bootstrap";
// import Postss  from "../component/Post.js";
function Home() {
    const [load , setload] = useState([]);
    var [data , setData] = useState([]);

   const apiData  = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const api_res = await response.json()
    setData(api_res); 
   };

   var loadPost = () => {
    if(load.length>=5){
        alert("you have execute the limit");
    }else{
        setload(load => [...load , <Services/>])
    }
   }

   var remove = () => {
    let sure = window.confirm("Are you Sure Want to remove");
    if(sure){
        load.pop();
        setload(load => [...load])
    }
    
   };
    return (
        <>  <div className="img-container">
            <Navbar />
            <div className="container text-center text-white center">
                <section className="display-2 fw-bold">WE MAKE AWESOME TOURS</section>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                    Lorem Ipsum has been the industry's standard .</h6>
                <button type="button" className="button">Find Tour</button>
            </div>
        </div>
            {/* cards */}
            <Container>
                <section className="section-padding">
                    <Row className="text-center text-dark">
                        <h1>SERVICES</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor<br /> invidunt ut labore et dolore magna aliquyam erat.</p>
                    </Row>
                    <Row>
                        {CardsVariables.map((item, index) => {
                            return <Services key={index} data={item} />
                        })}
                    </Row>
                </section>
            </Container>

            {/* why choose us sectrion */}
            
            <div className="bgimg-container">
            <Container className="section-bg">
                <section className="section-padding">
                    <Row className="text-center text-white">
                        <h1> WHY CHOOSE US</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor<br /> invidunt ut labore et dolore magna aliquyam erat.</p>
                    </Row>
                    <Container>
                        <Row>
                            <Carousell CarouselVariables={CarouselData} />
                        </Row>
                    </Container>
                </section>
            </Container>
            </div>
            <button onClick={loadPost}> Load Posts</button>
            
            {data.map((item) =>{
                return (
                    <>
                        <div className="bg-primary">
                        title = {item.title}<br />
                        body = {item.id}

                        </div>
                    </>
                )
            })}

            {load}{loadPost == true ? <button onClick={remove}> Load Posts</button>:null}
          
        </>
    );
}

export default Home;
