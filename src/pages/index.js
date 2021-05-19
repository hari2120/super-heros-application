import Layout from "../components/Layout/Layout";
import Navbar from "../components/NavigatonBar/Navbar";
import styles from "../styles/Home.module.css";
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardExampleCardProps from "../components/home/Home";
import { useState } from "react";
import FilterHero from "../components/Filter/filterHero";
import { gettingData } from "../Redux/actions/Actions";

export default function Home({ superHeros }) {
  const [keyword, setKeyword] = useState("")
  const [filterToggle, setfilterToggle] = useState(null)


  const filterHero = superHeros.filter(superHeroName => 
    superHeroName.name.toLowerCase().includes(keyword) ||
    superHeroName.appearance.gender.toLowerCase().includes(keyword) ||
    superHeroName.appearance.race?.toLowerCase().includes(keyword)
  )
  
  const [filterByPower, setfilterByPower] = useState(filterHero)


  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }


  const handleOnclick = (e) => {
    setfilterByPower(
      filterByPower.sort(function (a , b) {
        return b.powerstats.power - a.powerstats.power;
      }
      )

    )
    setfilterToggle(false)
  

  }
  



  return (
    <Layout>
      <Navbar superHeros={superHeros} placeholder="name, gender, Publisher" onChange={onInputChange}/>
      
      <button onClick={() => setfilterToggle(!filterToggle)} name="" id="" className="btn btn-primary FilterHero ml-4" role="button" onClick={() => setfilterToggle(!filterToggle)}> filter</button>
      
      
      <div className={ styles.filter__container, filterToggle ? styles.show__filter__container : styles.hide__filter__container}>
        <button type="button" name="" id="" class="btn btn-primary" onClick={handleOnclick} >sort by Power</button>
      </div>
      <CardExampleCardProps superHeros ={filterByPower} />
      
    </Layout>
  );
}


export const getStaticProps = async () => {
  const res = await fetch(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );
  const superHeros = await res.json();

  return {
    props: {
      superHeros,
    },
  };
};
