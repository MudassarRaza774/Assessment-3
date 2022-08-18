import './App.css';
import Aboutme from './components/Aboutme';
import BottomBar from './components/BottomBar';
import Introduction from './components/Introduction';
import LatestNews from './components/LatestNews';
import LetsTalk from './components/LetsTalk';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Rights from './components/Rights';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div >
      <Navbar />
      <Introduction />
      <Aboutme />
      <Portfolio />
      <Testimonial />
      <LetsTalk />
      <LatestNews />
      <BottomBar />
      <Rights />
    </div>
  );
}

export default App;
