import { render } from '@testing-library/react';
import Filter from './Filter';

test('should render the search input, a sorting dropdown, and filter dropdown', () => {
  const container = render(
    <Filter
      query="pika"
      setQuery="pika"
      setLoading="false"
      types={['bug', 'electric']}
      selectType="bug"
      setSelectType="bug"
      order="asc"
      setOrder="asc"
    />
  );
  expect(container).toMatchSnapshot();
});
