import * as React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

export default class LinkBar extends React.Component {
    render() {
        return (
            <div>
                <!--sse-->
                <Col><a href="https://www.linkedin.com/in/ruiyu-gou-b25558171/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></Col>
                <Col><a href="https://github.com/Ein04" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a></Col>
                <Col><a href="https://github.com/Ein04" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a></Col>
                <!--/sse-->
            </div>
        )
    }
}

