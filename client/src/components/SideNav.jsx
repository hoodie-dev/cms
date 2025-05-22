import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md"
import { GrChapterAdd } from "react-icons/gr";

function SideNav(){
    return(
        <>
            <nav id="sidenav">
                <ul>
                    <li>   
                        <NavLink to={`createpost`}><MdAddCircleOutline size={20}/>Add Post</NavLink>
                    </li>
                    <li>
                        <NavLink to={`posts`}><GrChapterAdd size={20}/> All Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideNav