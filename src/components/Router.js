import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeComponent from './HomeComponent'
import MenuComponent from './MenuComponent'

export default class extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuComponent/>

                <Routes>
                    <Route path = "/" element = {<HomeComponent/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}