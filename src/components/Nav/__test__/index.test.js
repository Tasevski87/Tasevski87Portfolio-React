// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'Portfolio',
    description: <a href="https://github.com/Tasevski87/Portfolio">Html and Css Portfolio</a>  }
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
    />);
  })

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
})


describe('links are visible', () => {
  it('inserts text into the home link', () => {
    const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})

describe('onClick events', () => {
  it('calls the click handler when clicked', () => {
    const { getByText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
    fireEvent.click(getByText('About me'))
    fireEvent.click(getByText('Contact'))
    fireEvent.click(getByText('Projects'))
    fireEvent.click(getByText('Resume'))
   

    expect(mockSetCurrentCategory).toHaveBeenCalledTimes(4);
  });
})