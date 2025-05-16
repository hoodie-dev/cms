import React from "react";
import { Link } from "react-router-dom";

function SideNav(){
    return(
        <>
            <nav id="sidenav">
                <ul>
                    <li>   
                        <Link to={`createpost`}>Add Post</Link>
                    </li>
                    <li>
                        <Link to={`posts`}>All Posts</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideNav