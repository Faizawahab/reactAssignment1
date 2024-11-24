import house from "../assets/house.webp"
import valley from "../assets/valley.webp"
import mountain from "../assets/mountain.webp"



const Offers = () => {
    return( 
    <div> 
        <div className="flex justify-center items-center mt-40">
            <div>
            <h3 className="flex justify-center items-center text-[#06B6D4]">Our Offers</h3>
            <p className=" text-5xl mt-4 mb-24">Ongoing Offers</p>
            </div>
        
        </div>
     <div className="flex mx-20 gap-x-7">
        <div>
            <img src={house} alt="img" />
            <p className="text-xl mt-8">Up to 35% savings on Club <br /> rooms and Suites</p> 
            <ul className="list-disc mx-5">
                <li>Luxaries condition</li>
                <li>3 Adults & 2 Children size</li>
                <li>Sea view side</li>
                </ul>  
                <button className="text-[#06B6D4] border-2 border-[#06B6D4] w-[360px] pt-3 mt-8">Book Now</button>
        </div>
        <div>
        <img src={valley} alt="img" />
            <p className="text-xl mt-8">Up to 35% savings on Club <br /> rooms and Suites</p> 
            <ul className="list-disc mx-5">
                <li>Luxaries condition</li>
                <li>3 Adults & 2 Children size</li>
                <li>Sea view side</li>
                </ul>  
                <button className="text-[#06B6D4] border-2 border-[#06B6D4] w-[360px] pt-3 mt-8">Book Now</button>

        </div>
        <div>
        <img src={mountain} alt="img" />
            <p className="text-xl mt-8">Up to 35% savings on Club <br /> rooms and Suites</p> 
            <ul className="list-disc mx-5">
                <li>Luxaries condition</li>
                <li>3 Adults & 2 Children size</li>
                <li>Sea view side</li>
                </ul>  
                <button className="text-[#06B6D4] border-2 border-[#06B6D4] w-[360px] pt-3 mt-8">Book Now</button>

        </div>
     </div>
    </div>)
}


export default Offers;