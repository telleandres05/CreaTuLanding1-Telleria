import { CartWidget } from "./CartWidget";

export function Navbar() {

    return (
        <nav>
            <div>
                <h1>Geek Store</h1>
            </div>
            <div style={{display: 'flex',
                        width: '100%',
                        justifyContent: 'center'

            }} >
            <div style={{display: 'flex'

            }}>
                <ul style={{ listStyle: "none",
                    display: 'flex',
                    
                    
                }}>
                    <li style={{
                    margin: '0px 20px'
                    }}>
                        <a style={{
                        color: 'white'}} href="#">
                            Naruto
                        </a>
                    </li>
                    <li style={{
                    margin: '0px 20px'
                    }}>
                        <a style={{
                        color: 'white'}} href="#">
                            Dragon Ball
                        </a>
                    </li>
                    <li style={{
                    margin: '0px 20px'
                    }}>
                        <a style={{
                        color: 'white'}} href="#">
                            Pokemon
                        </a>
                    </li>
                    <li style={{
                    margin: '0px 20px'
                    }}>
                        <a style={{
                        color: 'white'}} href="#">
                            Yu-gi-oh!
                        </a>
                    </li>
                </ul>
                <div>
                    <CartWidget></CartWidget>
                </div>
            </div>
            </div>
        </nav>
    );
}
