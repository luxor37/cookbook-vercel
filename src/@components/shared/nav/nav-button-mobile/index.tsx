export default function NavButtonMobile() {
    const showMenu = (e) =>  {
        document.querySelector("#button").classList.toggle("change");
        document.querySelector(".nav-items").classList.toggle("max-h-96");
        document.querySelector(".nav-items").classList.toggle("max-h-0");
    }

    return (
        <div id="button" className="inline-block cursor-pointer md:hidden" onClick={showMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}