import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Questions = () => {
    return (
        <div>
        <h2 className='py-3'>Questions Answer</h2>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How react works
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        In order to explain the react we can compare it with plain javascript. Javascript works and executes the code line by line whereas react creates multiple peace of code called components. it helps react to understand code efficiently. react also creates virtual dom to make this code faster to run then it finds the best way to update the browser dom. react works unidirectional way top to bottom means parent to child.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Difference between props and state
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Props</strong> is nothing but a properties which is an object it stores value of attribute which is similar to HTML tag. props is passed one component to another and similar to function arguments. props are always immutable can't be changed or modify. we can get the props data by writing this.props.
        <strong>State</strong> react state is component class which can be defined as an object. state is like a dynamically clock because it changes over time as clock changes it's time.
        <strong>Difference:</strong>
        Props are immutable which can not be changed and modified while state is an observable. state can be used in the class components, functional components while props don't have it. props are defined by parent components whereas state is updated generally.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How useState works
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Questions;