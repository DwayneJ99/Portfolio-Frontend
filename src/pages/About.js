
import {useState, useEffect} from 'react'

const About = (props) => {

    const [about, setAbout] = useState(null);

        const getAboutData = async () => {
            const response = await fetch(props.URL + "about")
            const data = await response.json()
            setAbout(data)
        }

        useEffect(() => {
            getAboutData()
        }, [])

    const loaded = () => (
        <div>
        <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
      <a href={about.Linkedin}>
        <button>Linkedin</button>
      </a>
      <a href={about.Github}>
        <button>Github</button>
      </a>
        </div>
    )




    return about ? loaded() : <h1>Loading...</h1>
  }
  
  export default About;
  