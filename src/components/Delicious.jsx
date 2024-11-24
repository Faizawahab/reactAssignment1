import food from "../assets/food.webp"
import cake from "../assets/cake.webp"

const Delicious = () => {
    return(
        <div className="flex gap-20 mx-20 mb-20">
<div className="flex gap-3">
    <div>
    <img src={food} alt="img" />
    </div>

<div>
<img className="mt-10" src={cake} alt="img" />
</div>


</div>
<div>
    <h3 className="text-[#06B6D4] mb-5">Delicious Food</h3>
    <h2 className="text-5xl mb-7">We Serve Fresh and <br /> Delicious Food</h2>
    <p>Suscipit libero pretium nullam potenti. Interdum, blandit <br /> phasellus consectetuer dolor ornare dapibus enim ut <br /> tincidunt rhoncus tellus sollicitudin pede nam maecenas,<br /> dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat <br />facilisi faucibus et. Rhoncus.</p>
     <p className="mt-16">Learn More</p>
</div>
        </div>
    
    )

}




export default Delicious