import data from '../../data/db.json'
import './Tours.css'

function Tours() {
    return (
        <>
        <main>
            {
                data.map(obj=>{
                   return( 
                   <div className ="card-border-wrap">
                    <div className = "card">
                        <img src = {obj.image}/>
                        <p>{obj.name}</p>
                    </div>
                   </div>
                   )
                })
            }
        </main>
        </>
    );
}

export default Tours;