import Link from 'next/link'
import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import Navbar from '../../components/NavigatonBar/Navbar'

const src = '/images/wireframe/white-image.png'

const CardExampleColored = ({allHeros}) => {
  const [showMore, setshowMore] = useState(4)


  const [keyword, setKeyword] = useState("")

  const filterHero = allHeros.filter((allHeroNames) => 
    allHeroNames.name.toLowerCase().includes(keyword) ||
    allHeroNames.appearance.gender.toLowerCase().includes(keyword) ||
    allHeroNames.appearance.race.toLowerCase().includes(keyword) 
    )


  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }



  return(
    <div>
      <Navbar placeholder="filter by name" onChange={onInputChange} />
      <div className="container mt-4">
      
        <Card.Group itemsPerRow={6}>
              {
                  filterHero.map((hero, i) => {
                    if(i <= showMore){
                      return(
                        <Link href={`/Hero/${hero.id}`}>
                          <Card key={i}   image={hero.images.sm} />

                        </Link>

                      )

                    }
                     
                  })
              }
              

          
          </Card.Group>
          <div className="m-4">
                <button type="button" onClick={(e) => setshowMore(showMore+2)} id="" class="btn btn-primary mb-4"> ---Show More</button>

              </div>

        </div>

    </div>
    

  )
}
   
 

export default CardExampleColored


export const getStaticProps = async () => {
  const res = await fetch(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );
  const allHeros = await res.json();

  return {
    props: {
      allHeros,
    },
  };
};
