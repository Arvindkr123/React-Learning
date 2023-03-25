import React from 'react'
import { Link , useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const navToPage = (url)=>{
        navigate(url)
    }
    // const navToPage = ()=>{
    //     let x = false;
    //     if(x){
    //         navigate('/about');
    //     }else{
    //         navigate('/filter');
    //     }
    // }
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is home page of our awesome app</p>
            <p>here we are learning about router</p>
            <ul style={{ listStyle: 'none' }}>
                <li>
                    <Link to="/about">Go to about page</Link>
                </li>
                <li>
                    <Link to="/contact">Go to Contact page</Link>
                </li>
                <li>
                    <button onClick={()=>navToPage('/about')}>Go about page</button>
                </li><br/>
                <li>
                    <button onClick={()=>navToPage('/filter')}>Go filter page</button>

                </li>
            </ul>
        </div>
    )
}

export default Home;
// function Home() {
//     const navigate = useNavigate();
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <p>This is home page of our awesome app</p>
//             <p>here we are learning about router</p>
//             <ul style={{ listStyle: 'none' }}>
//                 <li>
//                     <Link to="/about">Go to about page</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Go to Contact page</Link>
//                 </li>
//                 <li>
//                     <button onClick={()=>navigate('/about')}>Go about page</button>
//                 </li><br/>
//                 <li>
//                     <button onClick={()=>navigate('/filter')}>Go filter page</button>

//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default Home;
