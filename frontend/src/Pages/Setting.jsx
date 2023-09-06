import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Setting() {
    return (
        <div>
            <div className='Display_half'>
                <div className="container_login5 ">
                    <div className='stickyhead'>
                        <div className='head1'>
                            {/* <i class="fas fa-caret-left"></i> */}
                        </div>
                        <div className='head2'>
                            Setting
                        </div>
                    </div>
                    <div className="mt-5">
                        <h5 className="text-success mt-5">Want To Add Points</h5>
                    <Link to="/addpoint" class="btn btn-outline-success">ADD</Link>
                    </div>
                    <div>
                        <h5 className="text-danger mt-5">Want To Subtract Points</h5>
                    <Link to="/subpoint" class="btn btn-outline-danger">SUBTRACT</Link>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    );
}
