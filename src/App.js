import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Work from './components/work/work';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import DaysMalayalam from './components/work/content/days-malayalam'
import DesigningDashboards from './components/work/content/designing-dashboards'
import VibrantPortraits from './components/work/content/vibrant-portraits'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/designingdashboards" element={<DesigningDashboards />} />
        <Route path="work/vibrantportraits" element={<VibrantPortraits />} />
        <Route path="work/daysmalayalam" element={<DaysMalayalam />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
