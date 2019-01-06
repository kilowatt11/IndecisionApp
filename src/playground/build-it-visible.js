console.log("Build it is Running!")
let show = false;

const showDetails = () => {
    show = !show;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>{show ? "Hide Details" : "Show Details"}</button>
            {show && (
                <div>
                    <p>Hey. These are some details you can now see</p>
                </div>
            )}

        </div>
    );
    ReactDOM.render(template, appRoot);
}



const appRoot = document.getElementById('app');
render();


