import { Fragment } from "react";

const Footer = () => {
    return ( 
        <Fragment >
            <div className="text-black text-xs flex flex-col justify-center items-center h-20 p-7">
                {/* <p>Powered by Aleph.js, Tailwind.css</p> */}
                <p> &copy;2022 Damar Krisnandi </p>
            </div>
        </Fragment>
     );
}
 
export default Footer;