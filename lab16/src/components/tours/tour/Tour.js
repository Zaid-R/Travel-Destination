import './Tour.css';

function Tour({city}) {
    return (
        <div className="card-border-wrap">
            <div className="card">
                <img src={city.image} />
                <p>{city.name}</p>
            </div>
        </div>
    )
}

export default Tour;