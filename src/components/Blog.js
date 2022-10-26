import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container mx-auto mt-20'>
                <h1 className="text-5xl font-bold text-center  my-10 text-gray-500">Frequent Questions & Answers</h1>
                <div className=' mb-10 px-20'>
                    <h1 className='text-4xl font-semibold my-2 text-green-600'>Question 1 : What is the purpose of React router ?</h1>
                    <p className='text-2xl font-semibold'><span className='text-3xl font-bold mt-2 mb-5 text-green-800'>Answer : </span > React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.It is used to define and render component based on the specified path. It will accept components and render to define what should be rendered.The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.</p>

                </div>
                <div className=' mb-10 px-20'>
                    <h1 className='text-4xl font-semibold my-2 text-green-600'>Question 2 : How does context API works ?</h1>
                    <p className='text-2xl font-semibold'><span className='text-3xl font-bold mt-2 mb-5 text-green-800'>Answer : </span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>

                </div>
                <div className=' mb-10 px-20'>
                    <h1 className='text-4xl font-semibold my-2 text-green-600'>Question 3 : What is useRef ?</h1>
                    <p className='text-2xl font-semibold'><span className='text-3xl font-bold mt-2 mb-5 text-green-800'>Answer : </span>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.
                        It can be used to access a DOM element directly.The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section. Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component. </p>

                </div>

            </div>
        </div>
    );
};

export default Blog;