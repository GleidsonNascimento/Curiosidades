import React from "react";
import NavBar from "../navbar/nav";
import "./sobre.css"

export default function Sobre(){
    return(
        <div className="background height">
            <NavBar/>
            <div className="page page-sobre">
                <h3>Sobre nos:</h3>
                <p>apenas uma pagina de projeto independente para aprender mais e praticar</p>
                <h3>caso queira algum personagem mande mensagem no e-mail:</h3>
                <p>curiosidadesAnim@gmail.com</p>
                <div className="social">
                    <a href="https://twitter.com/AlguemGleidson" target="_blank" rel="noreferrer"><img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/07/portalcbncampinas-com-br-twittereapolitica-twitter-logo.png?fit=2100%2C790&ssl=1" alt="twitter" /></a>
                    <a href="http://" ><img src="https://s2.glbimg.com/gJ2WZWBdrrGX0DgpAH7WuQY8k_I=/0x0:640x233/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/a/J/MmkRyqTCA7AD3DSz5DYA/2011-05-18-linkedin-logo-1.jpg" alt="linkidin"  /></a>
                </div>
                <p>criado e feito por Gleidson Guimarães</p>
            </div>
        </div>
    )
}