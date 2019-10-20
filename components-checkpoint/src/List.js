import React from 'react';
import ListItem from './ListItem';
function List() {
    return (
        <>
            <h2>List start</h2>
            <ul>
                <ListItem number="One" />
                <ListItem number="Two" />
                <ListItem number="Three" />
                <ListItem number="Four" />
            </ul>
        </>
    );
}


export default List ; 