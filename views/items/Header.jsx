import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>
        <div class="header-1">
            <a href="#" class="logo"><i class="fas fa-shopping-cart"></i>Burkindi</a>
            <form action="" class="search-box-container">
                <input type="search" id="search-box" placeholder="search here ..."/>
                <label for="search-box" class="fas fa-search"></label>
            </form>
        
        </div>
        
        <div class="header-2">
            <nav class="navbar">
                <a href="#home">home</a>
                <a href="#category">category</a>
                <a href="#products">products</a>
                <a href="#deals">deals</a>
                <a href="#contacts">contacts</a>
            </nav>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas  fa-heart"></a>
                <a href="#" class="fas fa-user-check"></a>
                <a href="#" class="fas fa-shipping-fast"></a>
            </div>
        </div>
        </header> 
    )
  }
}
















