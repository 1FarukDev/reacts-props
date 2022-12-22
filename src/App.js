import logo from './logo.svg';
import './App.css';
import jokes from './jokes'
import jokesData from './jokesData';
import Joke from './Joke';
export default function App() {
   const jokeElements = jokesData.map(jo => {
      return <Joke setup= {jo.Setup} punchline={jo.Punchline}/>
   })
   return (
   <div>
      {jokeElements}
   </div>
      )
}

/* <Jokes 
           Setup="I got my daughter a fridge for her birthday"
           Punchline="I can't wait to see her face light up when she opens it."   
        />
        <Jokes
           Setup="How did hacker escape the police?"
           Punchline="He just ran somware."
        />
         <Jokes
           Setup="Why do bee stay in the hive in the winter?"
           Punchline="Swarm."
        />
         <Jokes
          Setup="Why dont pirates travel on a mountain road?"
          Punchline="Scurvy."
        /> */

