import React from 'react';

const Topic = ({topic}) => {
    const {name,logo,total}= topic;
    return (
        <div>
                there are {name}{total} topics.           
        </div>
    );
};

export default Topic;