import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1>1.Props vs state</h1>
            <p><em>Props</em>: Props (short for "properties") are used to pass data from a parent component to a child component. They are read-only and cannot be modified within the child component. Props are passed down through the component tree, making it easy to share data between components.<br></br>
               <em> State</em>: State is used to manage data that can change within a component. It is owned and managed by the component itself, and can be modified using the setState() method. When state data changes, React re-renders the component to reflect the updated state.</p>
               <h1>2.How does useState work?</h1>
               <p>UseState is a built-in hook in React that allows you to add state to functional components. The useState hook returns an array with two elements: the current state value and a function to update the state value.</p>
               <h1>3.Purpose of useEffect other than fetching data.</h1>
               <p>The useEffect hook in React is used to perform side effects in functional components. Side effects are any operations that have an effect outside of the component itself, such as modifying the DOM, setting up event listeners, and fetching data from an API.</p>
               <h1>4.How Does React work?</h1>
               <p>React is a JavaScript library for building user interfaces. It follows a component-based architecture where the user interface is broken down into small, reusable components that can be composed to build complex UIs.<br></br>
                Here is a high-level overview of how React works:
                <ol>
                    <li>Components: You write components in React to describe the user interface. Components can be functional or class-based, and they can receive props as inputs and return UI elements.</li>
                    <li>Virtual DOM: React uses a virtual DOM to represent the state of the UI. The virtual DOM is a lightweight copy of the actual DOM, and it can be manipulated much faster than the real DOM.</li>
                    <li>State: Components can have state, which is data that changes over time. When the state of a component changes, React updates the virtual DOM to reflect the new state.</li>
                    <li>Reconciliation: When the state of a component changes, React updates the virtual DOM and compares it to the previous version to determine what changes need to be made to the actual DOM. This process is called reconciliation, and it is designed to be efficient and minimize the number of updates to the actual DOM.</li>
                    <li>Rendering: After reconciliation, React updates the actual DOM to reflect the new state of the UI.</li>
                </ol>
               </p>
        </div>
    );
};

export default Question;