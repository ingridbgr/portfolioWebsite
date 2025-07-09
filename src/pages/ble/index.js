
import "./style.css";
import React from "react";
import { bestLifeEver, socialprofils } from "../../content_option";
import { Container } from "react-bootstrap";
import ble1 from '../../assets/images/ble_1.jpeg';
import ble2 from '../../assets/images/ble_2.jpeg';
import ble3 from '../../assets/images/ble3.jpg';
import me from '../../assets/images/medrawing.png';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export const BestLifeEver = () => {
    return (

        <Container>
            <div class="center-container">

                <div className="profile-container">
  <img src={me} alt="Profile" className="profile-image" />
</div>

                <h2> {bestLifeEver.title}</h2>

                <div class="center-column" >{bestLifeEver.description}  </div>
                <div className="social-buttons">

                    <h4> {bestLifeEver.instagraminvite}</h4> 
                    <a href={socialprofils.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>
                    <a href={socialprofils.whatsapp} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                    </a>
                    <a href={socialprofils.email}>
                        <FaEnvelope />
                        <span>Email</span>
                    </a>
                </div>
                <div className="photo-gallery">
                    <div className="item item-h">
                        <img src={ble1} alt="Ble 1" />
                    </div>
                    <div className="item item-h">
                        <img src={ble2} alt="Ble 2" />
                    </div>
                    <div className="item item-h">
                        <img src={ble3} alt="Ble 3" />
                    </div>
                </div>


            </div>

        </Container>

    );
};
