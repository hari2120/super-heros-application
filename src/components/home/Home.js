import Link from 'next/link'
import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styles from "./Home.module.css"


const CardExampleCardProps = ({superHeros}) => {
    const [showMore, setshowMore] = useState(4)


    return(
        <div className={`container mt-4 ${styles.card_container}`}>
             {
            superHeros.map((sHeros, i) => {
                if(i <= showMore){
                    return(
                        <Link 
                            key={i}  
                            as={`/Hero/${sHeros.id}`} 
                            href={{pathname: '/Hero/[id]', query: { superHerosData: "Hari"}}}>
                            <Card
                                image= {sHeros.images.lg}
                                header={sHeros.name}
                                meta={`${sHeros.appearance.gender}, ${sHeros.appearance.race}`}
                                description={
                                    `His Original Name is ${sHeros.biography.fullName}, being ${sHeros.biography.placeOfBirth} as his birth place.
                                    intelligence: ${sHeros.powerstats.intelligence},
                                    strength: ${sHeros.powerstats.strength},
                                    and combat: ${sHeros.powerstats.combat}  `
                                }
                                extra={`POwer: ${sHeros.powerstats.power}`}
                            />
                        </Link>

                    )
                }
                
            })
        }
        <button type="button" name="" onClick={(e) => setshowMore(showMore+2)} id="" class="btn btn-primary btn-lg btn-block"> ---Show More</button>

        </div>
       

    )
}
   
  
export default CardExampleCardProps
