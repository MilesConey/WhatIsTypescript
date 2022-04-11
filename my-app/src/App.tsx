import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
const axios = require('axios');

function App() {
  

  const [def, setDef] = useState([]);

  const form: HTMLFormElement = document.querySelector("#defineform");
  document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    let form = event.target as HTMLFormElement;
  });

    useEffect(() => {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      form.onsubmit = async () => {
        const formData = new FormData(form);
        // console.log(formData);
        const text = formData.get("defineword") as string;
        axios.get(url + text)
          .then((res) => {
            console.log(res);
            setDef(res.data);
          })
          .catch((err) => {
            console.log(err);
        })
        //.then((response: Response) => response.json())
        // const json = response.json();
        // setDef(await json);
        //.then(function (data) {
        // console.log(json);
        //  console.log(def);
      }
    }
      //.catch((error) => console.log(error));
      //console.log(text);

      ,[]);
      return (

        <div className="App">
          
      <main className="container">

          <div className="bg-white p-5 rounded">
            <h1 className="defined">Dictionary</h1>
            <p className="lead">Definition</p>
            {def.map((def: any) => (
            <ul className="list-unstyled">
              <li>{def.word}</li>
              {def.phonetics.map((phonetics: any) => (
                <ul className="list-unstyled">
                  <li>{phonetics.text}</li>
                  {def.meanings.map((meanings: any) => (
                <ul className="list-unstyled">
                  <li>{meanings.partOfSpeech}</li>
                  {meanings.definitions.map((definitions: any) => (
                <ul className="list-unstyled">
                  <li>{definitions.definition}</li> 
                  {meanings.synonyms.map((synonyms: any) => (
                <ul className="list-unstyled">
                  <li>{meanings.synonyms}</li>
                  <li>__*__*__*__*__</li>
                  
              </ul>
              ))}
              </ul>
              ))}
              </ul>
              ))}
              </ul>
              ))}
              </ul>
              ))}
           </div>
           </main>  
           </div>
              
      );
              }
        export default App;