import App from '../Components/App';
import renderer from 'react-test-renderer';
// Snapshot test for App
test('App snapshot test', () => {
  const component = renderer.create(
      <App />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});