import water from "../assets/water.webp"
import Pic from "../assets/about.webp"

const About = () => {
    return (
        <div className="flex justify-center gap-20 mt-20">
            <div>
                <p className="text-[#06B6D4]">About Us</p>
                <h1 className="text-5xl pt-6 pb-6">A Luxuries Hotel <br /> with Nature</h1>
                <p className="pb-10">Suscipit libero pretium nullam potenti. Interdum, blandit <br /> phasellus consectetuer dolor ornare dapibus enim ut <br /> tincidunt rhoncus tellus sollicitudin pede nam maecenas, <br />dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat <br /> facilisi faucibus et. Rhoncus.</p>
                <p>Learn More</p>
            </div>
            <div>
                <div className="flex gap-3">
                  <div><img src={water} alt="img" /></div>  
                    <div className="mt-10"><img src={Pic} alt="img" /></div>
                
                </div>
            </div>
        </div>)
}


export default About