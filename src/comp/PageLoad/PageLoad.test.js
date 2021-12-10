import { render } from '@testing-library/react';
import PageLoad from './PageLoad';

test('should render the list of poke cards, be able to update page and loading state', () => {
  const container = render(
    <PageLoad pokemon={['butterfree', 'pikachu']} setLoading="false" setCurrentPage="1" />
  );
  expect(container).toMatchSnapshot();
});
