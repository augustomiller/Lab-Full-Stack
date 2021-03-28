import React from 'react';
import Header from './components/Header';

export default function App() {
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>login</li>
                </ul>
            </Header >
        </>
    );
}