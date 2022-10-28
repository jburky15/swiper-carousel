import './App.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { Slider } from './components/Slider';
import { imageExport } from './assets/imageExport';

function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '800px',
        height: '700px',
        backgroundColor: 'rgb(255, 255, 255)',
        padding: '20px'
      }}>
        <Slider images={ imageExport } />
      </div>
    </div>
  );
}

export default App;
