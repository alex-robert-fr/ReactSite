import React from 'react'
import { NavLink } from "react-router-dom";

function ButtonsBottom({left, right}) {
    return (
        <div>
            <div className="scroll-bottom">
                <div className="sb-main">
                    {left && (
                        <NavLink to={left} className='left hover'>
                            <span>&#10092;</span>
                        </NavLink>
                    )}
                    <p className="center">scroll</p>
                    {right && (
                        <NavLink to={right} className='right hover'>
                            <span>&#10093;</span>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ButtonsBottom
