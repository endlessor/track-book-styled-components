import React from 'react';
import { render } from 'react-testing-library';

import StyledPrimaryButton from '../StyledPrimaryButton';

describe('<StyledPrimaryButton />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<StyledPrimaryButton />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<StyledPrimaryButton />);
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<StyledPrimaryButton id={id} />);
    expect(container.querySelector('button').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<StyledPrimaryButton attribute="test" />);
    expect(container.querySelector('button[attribute="test"]')).toBeNull();
  });
});
