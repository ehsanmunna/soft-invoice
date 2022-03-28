import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Registration from './Registration';

afterEach(cleanup);

test('render restration header', () => {
  // renderer(<Registration />);
  const component = renderer.create(
    <Registration />
  );
  let tree = component.toJSON();
  // console.log(tree);
    // const linkElement = screen.getByText(/Be a member/i);
    // expect(linkElement).toBeInTheDocument();
    // const loginText = screen.getByText(/already registared?/i);
    // expect(loginText).toBeInTheDocument();
  });