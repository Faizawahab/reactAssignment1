const Footer = () => {
    return (
<div className="flex justify-center gap-20 text-white bg-black h-[60vh] pt-24">
    <div>
        <h1 className="text-2xl mb-8">Address</h1>
        <p>200, Green road, Mongla, <br />
        New Yor City USA</p>

    </div>
    <div>
        <h1 className="text-2xl mb-8">Reservation</h1>
        <p>+10 367 267 2678 <br />
        reservation@montana.com</p>
    </div>
    <div>
        <h1 className="text-2xl mb-8">Navigation</h1>
        <ul>
            <li className="mb-4">Home</li>
            <li className="mb-4">Rooms</li>
            <li className="mb-4">About</li>
            <li>News</li>
        </ul>
    </div>
    <div>
        <h1 className="text-2xl mb-8">News</h1>
        <input type="text" placeholder="Enter your mail" className="py-2 pl-5"/>
        <button className="mb-4 px-3 py-2 bg-[#06B6D4]">Sign up</button>
        <p>Subscribe newsletter to get updates</p>
    </div>
</div>
    )
}

export default Footer 