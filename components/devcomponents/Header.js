import React from "react";

export default function header(props){
  let matrix = "POASFJAPFJAPOJAEPOMVPAFOSHEGOIWUQYTIZKZNVUWRYQOEQIHT2193218746319863114631874938716950123124012846031842140121385618!@#$%^&*())(*&^%$#@!NCONBCZCHAGSCGASCDGQWWPURORTJLHFJHMNBVMNBCNZBVNZVXCKJFAKJSFAGLADFGLAKETOQWYPQWOITYQTOIQMENHTPQ"
  matrix = matrix.split("")



  const STRING_LENGTH = 40; // Fixed length of the string
  const getRandomString = () => {
    let result = [];
    for (let i = 0; i < STRING_LENGTH; i++) {
      result.push(matrix[Math.floor(Math.random() * matrix.length)]);
    }
    return result;
  };

  const [RandomCounter, setRandomCounter] = React.useState(getRandomString());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandomCounter(prev => {
        // Copy the current state
        let newString = [...prev];
        
        // Randomly pick one character to update
        const randomIndex = Math.floor(Math.random() * STRING_LENGTH);
        newString[randomIndex] = matrix[Math.floor(Math.random() * matrix.length)];
        
        return newString;
      });
    }, 50); // Adjust for faster/slower effect

    return () => clearInterval(interval);
  }, []);

 



  //CONDITIONAL STyleS
  const containerStyle = {
    /* display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', */
  };
  /* const title ={
    postion: 'static'
  }  */
  const titlealtName ={
    position: 'absolute',
    top:'1vh',
    right: '3vw',
  } 
  const titlealtDev ={
    position: 'absolute',
    top:'1vh',
  } 

  const matrixStyle ={
    position: 'absolute',
    top:'0.7vh',
    left: '31vw'
  }
  
  const vaderStyle ={
    position: 'absolute',
    top:'1vh',
    left: '40vw'
  }

  const Vader = "REBEL  FORCES  HAVE  BEEN  CRUSHED"

  return(
    <div  style={props.colors.get("Thematrix") ? containerStyle : {}} className= "head-bar" >
     <div className="dev-header"><p>Dev Portfolio</p> </div>

    {props.colors.get("Thematrix") && <div  style={matrixStyle} className ="text-positioning"><p> {RandomCounter}  </p></div>}

    {props.colors.get("Vader") && window.innerWidth >= 768 && <img className="vader-image" src="components/devcomponents/devimg/vader.png" width={20} height={17}></img>}
    {props.colors.get("Vader") && window.innerWidth >= 768 && <div  style={vaderStyle} className ="text-positioning"><p> <strong>{Vader}</strong>  </p></div>}
    {props.colors.get("Vader") && <div className="cover"></div>}

     <div className="Name-header"><p>KUNAL CHANDEL</p> </div>
    </div>
  )
}