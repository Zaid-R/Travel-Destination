import { Link } from 'react-router-dom';
import data from '../../data/db.json'
import './Tours.css'
import Tour from './tour/Tour';

function Tours() {
    return (
        <>
            <main>
                {

                    data.map(city => (
                        <div key={city.id}>
                            <Link to={`/city/${city.id}`}>
                                <Tour city = {city} />
                            </Link>
                        </div>

                    ))
                }
            </main>
        </>
    );
}

export default Tours;