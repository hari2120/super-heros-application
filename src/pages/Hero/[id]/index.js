import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState } from 'react'
import { Card } from 'semantic-ui-react';
import Layout from '../../../components/Layout/Layout'
import Navbar from '../../../components/NavigatonBar/Navbar';
import styles from "../hero.module.css"


const Hero = ({hero, superHeros, superHerosData}) => {
    // const router = useRouter()
    // const {
    //     query: { superHerosData },
    //   } = router
    const [showMore, setshowMore] = useState(4)

    const [related] = useState(hero.biography.publisher.toLowerCase())
    const [SimilarRaceKeyWord] = useState(hero.appearance.race?.toLowerCase())


    // zoom imag eon hover...
    const src = hero.images.md
    const largeImage = hero.images.lg

    const [imageStyle, setImageStyle] = useState({
        backgroundImage: `url(${largeImage})`,
        backgroundPosition: '0% 0%'
    })


    const handleMOuseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setImageStyle({ backgroundImage: `url(${largeImage})`, backgroundPosition: `${x}% ${y}%`})
    }


    // converting string to array
    const stringToArray = (strings) => {
        
        const converted = strings.split(/[;,]+/)
        
        return converted
    }
    const commonGroup = stringToArray(hero.connections.groupAffiliation)
    const relatives = stringToArray(hero.connections.relatives)
   

    // All filtering done Here...

    const filterByPublisher = superHeros.filter((sPublisher) => 
    sPublisher.biography.publisher?.toLowerCase().includes(related)
    )
    const filterByRace = superHeros.filter((sPublisher) => 
    sPublisher.appearance.race?.toLowerCase().includes(SimilarRaceKeyWord)


    )



    


    return (
        <Layout>
            <Navbar />
            <div className={`container ${styles.whole__container}`}>
                <div className={styles.top_container}>
                    <figure className={styles.figure__Image} onMouseMove={handleMOuseMove} style={imageStyle}>
                        <img src={src} alt={hero.name} className={styles.hero_image}/>

                    </figure>
                        <div className={styles.right__container}>
                            <h3 className={styles.biography__name}>{hero.name}</h3>
                            <p className={styles.biography_originalName}>original Name: <strong>{hero.biography.fullName}</strong> </p>
                            <div className={styles.publisher__details}>
                                <h5 className={styles.publisher__heading}>Publisher:</h5>
                                <h3 className={styles.publisher}>{hero.biography.publisher}</h3>
                            </div>
                            <div className={styles.hero__highlights}>
                                <div className={styles.hero_stats}>
                                    <p className={styles.stat__heading}>Power: </p>
                                    <p className={styles.stat__value}>{hero.powerstats.power}</p>
                                </div>
                                <div className={styles.hero_stats}>
                                    <p className={styles.stat__heading}>Strength: </p>
                                    <p className={styles.stat__value}>{hero.powerstats.strength}</p>
                                </div>
                                <div className={styles.hero_stats}>
                                    <p className={styles.stat__heading}>Intelligence: </p>
                                    <p className={styles.stat__value}>{hero.powerstats.intelligence}</p>
                                </div>
                                <div className={styles.hero_stats}>
                                    <p className={styles.stat__heading}>Speed: </p>
                                    <p className={styles.stat__value}>{hero.powerstats.speed}</p>
                                </div>
                                <div className={styles.hero_stats}>
                                    <p className={styles.stat__heading}>Durability: </p>
                                    <p className={styles.stat__value}>{hero.powerstats.durability}</p>
                                </div>
                                <div className={styles.hero_stats}>
                                    <p className={styles.stat__heading}>Combat: </p>
                                    <p className={styles.stat__value}>{hero.powerstats.combat}</p>
                                </div>
                               </div>
                               <div className={styles.occupation_container}>
                                   <h4 className={styles.occupation__question}>
                                       Wanna know what he does for living???
                                   </h4>
                                   <p className={styles.occupation}>
                                       {hero.work.occupation}
                                   </p>
                               </div>
                            
                        </div>
                        <div>
                            <button name="" id="" class="btn btn-danger" href="#" role="button">Like</button>

                        </div>
                </div>
                <div className={styles.bottom__container}>
                    <div className={styles.first__container}>
                        <table className="table table-striped">
                           
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{hero.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">gender</th>
                                    <td>{hero.appearance.gender}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Race</th>
                                    <td>{hero.appearance.race}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Height</th>
                                    <td>{`${hero.appearance.height[0]}, ${hero.appearance.height[1]}`}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Weight</th>
                                    <td>{`${hero.appearance.weight[0]}, ${hero.appearance.weight[1]}`}</td>
                                </tr>
                                <tr>
                                    <th scope="row">eyeColor</th>
                                    <td>{hero.appearance.eyeColor}</td>
                                </tr>
                                <tr>
                                    <th scope="row">hairColor</th>
                                    <td>{hero.appearance.hairColor}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.first__container}>
                        <table className="table table-striped">
                           
                            <tbody>
                                <tr>
                                    <th scope="row">Full Name</th>
                                    <td>{hero.biography.fullName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Aliases</th>
                                    <td>{hero.biography.aliases.map(aliase => <p>{aliase}</p>)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Race</th>
                                    <td>{hero.biography.placeOfBirth}</td>
                                </tr>
                                <tr>
                                    <th scope="row">First appearance</th>
                                    <td>{`${hero.biography.firstAppearance}`}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Publisher</th>
                                    <td>{`${hero.biography.publisher}`}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Alignment</th>
                                    <td>{hero.biography.alignment}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                   
                   
                </div>
                <div className={styles.first__container, styles.firstOne}>
                        <table className="table table-striped">
                           
                            <tbody>
                                <tr>
                                    <th scope="row">Common Group</th>
                                    <td>{commonGroup.map(groupName => <p>{groupName}</p>)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Relatives</th>
                                    <td>{relatives.map(relative => <p>{relative}</p>)}</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>

            </div>
                <div className={`container mt-4 ${styles.related__superHeros}`}>
                    <h1 className={styles.similar__post__heading}>Similar Posts</h1>
                    <div className={styles.first__related__post}>
                        <h3 className={styles.filterd__heading}>Similar Publisher</h3>
                        <div className={`container mt-4 ${styles.card_container}`}>
                            {
                                filterByPublisher.map((filteredHero, i) => {
                                    if(i <= showMore){
                                        return(
                                            <Link 
                                                key={i}  
                                                as={`/Hero/${filteredHero.id}`} 
                                                href={{pathname: '/Hero/[id]', query: { superHerosData: "Hari"}}}>
                                                <Card
                                                    image= {filteredHero.images.lg}
                                                    header={filteredHero.name}
                                                    meta={`${filteredHero.appearance.gender}, ${filteredHero.appearance.race}`}
                                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                                    
                                                />
                                            </Link>

                                        )
                                    }
                                    
                                })
                            }
                            <div>
                            <button type="button" name="" onClick={(e) => setshowMore(4)} id="" class="btn btn-primary btn-lg btn-block"> ---Show Less</button>
                            <button type="button" name="" onClick={(e) => setshowMore(showMore+2)} id="" class="btn btn-secondary btn-lg btn-block"> ---Show More</button>
                    

                            </div>

                        </div>
                                
                    </div>
                    <div className={styles.first__related__post}>
                        <h3 className={styles.filterd__heading}>by Race</h3>
                        <div className={`container mt-4 ${styles.card_container}`}>
                            {
                                filterByRace.map((filteredHero, i) => {
                                    if(i <= showMore){
                                        return(
                                            <Link 
                                                key={i}  
                                                as={`/Hero/${filteredHero.id}`} 
                                                href={{pathname: '/Hero/[id]', query: { superHerosData: "Hari"}}}>
                                                <Card
                                                    image= {filteredHero.images.lg}
                                                    header={filteredHero.name}
                                                    meta={`${filteredHero.appearance.gender}, ${filteredHero.appearance.race}`}
                                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                                    
                                                />
                                            </Link>

                                        )
                                    }
                                    
                                })
                            }
                            <div>
                            <button type="button" name="" onClick={(e) => setshowMore(4)} id="" class="btn btn-primary btn-lg btn-block"> ---Show Less</button>
                            <button type="button" name="" onClick={(e) => setshowMore(showMore+2)} id="" class="btn btn-secondary btn-lg btn-block"> ---Show More</button>
                    

                            </div>

                        </div>
                                
                    </div>
                
                </div>

        </Layout>
    )
}

export default Hero


export const getServerSideProps = async ({params, query: superHerosData}) => {
    const res = await fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${params.id}.json`
    );
    const hero = await res.json();
    const sHeroData = await fetch(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
      );
      const superHeros = await sHeroData.json();

      
  
    return {
      props: {
        hero,
        superHeros,
        superHerosData
      },
    };
  };
  