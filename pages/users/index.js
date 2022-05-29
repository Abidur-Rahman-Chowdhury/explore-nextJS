import React from 'react';

const index = ({users}) => {
    /** for data load in React
     * 1.State to hold the data
     * 2. useEffect , load data and set to the state
     *  */  
    return (
        <div>
            <h2>This is users main page: {users.length }</h2>
        </div>
    );
};

export default index;
export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json();

    return {
      props: {users:data}, // will be passed to the page component as props
    }
  }