import { SidebarProvider } from './context/SidebarContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Orders from './components/Orders';
import Analytics from './components/Analytics';

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Layout>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;