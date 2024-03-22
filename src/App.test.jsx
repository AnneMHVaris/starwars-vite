import { render, screen } from '@testing-library/react';
//import { render } from '@testing-library/react';
import App from './App';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import HomeWorldModal from './components/Modal/HomeWorldModal';

//test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});
import { describe, it, expect } from 'vitest'

export class IntersectionObserver {
    root = null;
    rootMargin = "";
    thresholds = [];
  
    disconnect() {
      return null;
    }
  
    observe() {
      return null;
    }
  
    takeRecords() {
      return [];
    }
  
    unobserve() {
      return null;
    }
  }
  window.IntersectionObserver = IntersectionObserver;
  global.IntersectionObserver = IntersectionObserver;

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1+1).toEqual(2)
  })
})

describe('App', () => {
    it('renders the App component', () => {
      render(<App />)
      render(<Card />)
      render(<Modal />)
      render(<HomeWorldModal />)
     
      screen.debug(); // prints out the jsx in the App component unto the command line
    })
  })

