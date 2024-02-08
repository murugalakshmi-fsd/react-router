import {Link,Outlet} from "react-router-dom"

function Middlebar() {
    return (
        <div className='container'>
            <div className="col-2"></div>
            <div className="col-8 ">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link"style={{ color: 'black', fontSize:'25px', fontSmooth:'5px' }} onMouseEnter={(e) => e.target.style.color = 'green'} onMouseLeave={(e) => e.target.style.color = 'black'} aria-current="page" to="/">All</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: 'black', fontSize:'25px', fontSmooth:'5px' }} onMouseEnter={(e) => e.target.style.color = 'green'} onMouseLeave={(e) => e.target.style.color = 'black'} to="/fullstack">Full stack Development</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: 'black', fontSize:'25px', fontSmooth:'5px' }} onMouseEnter={(e) => e.target.style.color = 'green'} onMouseLeave={(e) => e.target.style.color = 'black'} to="/datascience">Data Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: 'black', fontSize:'25px', fontSmooth:'5px' }} onMouseEnter={(e) => e.target.style.color = 'green'} onMouseLeave={(e) => e.target.style.color = 'black'} to="/cyber">Cyber Security</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: 'black', fontSize:'30px', fontSmooth:'5px' }} onMouseEnter={(e) => e.target.style.color = 'green'} onMouseLeave={(e) => e.target.style.color = 'black'} to="/career">Career</Link>
                    </li>
                </ul>
            </div>
            <div className="col-2"></div>
        <Outlet/>
        </div>
        
    )
}

export default Middlebar