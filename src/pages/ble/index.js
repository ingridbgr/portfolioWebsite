
import "./style.css";
import { bestLifeEver } from "../../content_option";
import { Container } from "react-bootstrap";



export const BestLifeEver = () => {
    return (

        <Container>
            <div class="center-container">
    
                <h2> {bestLifeEver.title}</h2> 
             
                <div class="center-column" >{bestLifeEver.description}  </div>
            </div>
        </Container>

    );
};
