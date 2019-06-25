import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DetailPage extends Component {
   
    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to = "/" > Back to the list</Link>
                            </li>   
                        </ul>
                    </nav>
                </header>
                <main>
                    DetailPage
                </main>

            </div>
        )
    }
} 

export default DetailPage;