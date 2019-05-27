import * as React from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default class NameCard extends React.Component {
    render() {
        return (
            <div className="namecard">
                <div className="avatar"><img src="./assets/img/ein_alpha.png" alt="" /></div>
                <div className="me"><h1>Hi, I'm Ruiyu</h1>
                    A computer science and statistic undergrad, currently located in Vancouver, Canada.<br />
                    <FontAwesomeIcon icon={faHeart} />: Computer graphics/ Video Game/ Visual arts/ Artificial intelligence/ Sci-fic/ Fictions... Eveything fun!!!
                <div className="linkbar">
                        <h1><a href="https://www.linkedin.com/in/ruiyu-gou-b25558171/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></h1>
                        <h1><a href="https://github.com/Ein04" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a></h1>
                        <h1><a href="https://www.facebook.com/profile.php?id=100008718317702" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a></h1>
                        <h1><a href="reyget42@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /></a></h1>
                </div>
                </div>
            </div>
        )
            }
}