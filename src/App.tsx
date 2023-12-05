import router from './routes/router';
import { RouterProvider } from '@tanstack/react-router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
