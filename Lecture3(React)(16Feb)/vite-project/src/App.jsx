import React from 'react'

const App = () => {
  return (
    <div>
      {/* in order to call a component..we need to use it here */}
      <Header />
    </div>
  )
}
function App(){
  let a = 10;
  let b = 5;
  let user = {
    name : "Nitish",

  }
}

function Header(){
  return(
    <div>
      <nav>
        <ul>

        
          <li className='nav-items'>Component 1</li>
          <h4>Random Value : {Math.random}</h4>
        </ul>
      </nav>
    </div>
  )
}

export default App

//features of react 
//1. React offfercomponent based architecture
/*



components are small reusable pieces of code
 that return a react element to be rendered on the page.



q2. How many types of components do we have 

ans2: we have 2 types of components 
1.class component : using js classes


2.functional component : using js functions which returns 
HTML like code called JSX

RULE:1 Component name should start with Capital letter 


q3. What is jsx?
ans3: jsx is xml syntax which looks like HTML



Differences between HTML and JSX
1. In HTML we use class attribute to add css classes but in JSX we
 use className attribute to add css classes

2. In HTML we use for attribute to label form elements but in 
JSX we use htmlFor attribute to label form elements

3. In HTML we can write inline styles using style attribute but in 
JSX we need to pass an object to the style attribute to write inline styles



//Component first letter should be capital letter because react treats 
// components starting with small letter as html tags and will 
// throw an error if we try to use them as components.




* is let variable are also hoisted
*/
//2. virtual dom
//3. unidirectional data flow
//4. jsx
//5. hooks