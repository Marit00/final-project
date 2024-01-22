import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import foodimg from '../icons_assets/restauranfood.jpg'

function Header() {
    return (
        <header className="container">
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a
                        modern twist.</p>
                    <Link to="/reservations">
                        <button>Reserve Table</button>
                    </Link>
                </div>
                <div>
                    <img src={foodimg} alt="Food of Little Lemon restaurant"/>
                </div>
            </section>
        </header>
    );
}

export default Header;
