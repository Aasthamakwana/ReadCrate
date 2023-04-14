import {Routes, Route} from 'react-router-dom';
import ExpBookList from './ExpBookList';
import Footer from '../Footer/Footer';
import './Exp.css'

function Exp() {
  return (
    <div className="none">
      <Routes>
        <Route path="/" element={<ExpBookList/>} />
      </Routes>
      < Footer />
    </div>
  );
}

export default Exp;