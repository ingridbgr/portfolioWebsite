
import "./style.css";
import { connectData, bestLifeEver } from "../../content_option";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Connect = () => {
    return (

        <Container>
            <div class="center-container">
                <meta charSet="utf-8" />
                <title> {connectData.title}</title>
                <meta name="description" content={connectData.description} />
                
                <div class="button-column" >
                           <a href={connectData.button1link}>
                    <button className="btn ac_btn" type="submit">
                        {connectData.button1title}
                    </button>
                    </a>
                          <a href={connectData.button2link}>
                    <button className="btn ac_btn" type="submit">
                        {connectData.button2title}
                    </button>
</a>
                  
                     <a href={connectData.button3link}>
                    <button className="btn ac_btn" type="submit">
                        {connectData.button3title}
                    </button>
                    </a>
                    <a href={connectData.button4link}>
                    <button className="btn ac_btn" type="submit">
                        {connectData.button4title}
                    </button>
                    </a>
                </div>

            </div>
        </Container>

    );
};
