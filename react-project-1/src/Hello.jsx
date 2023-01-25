import "./style.scss";
import AdjIcon from '../public/assets/adj.svg';
import Dashboard from './dashboard/Dashboard';

const Hello = () => <h1 className="title">
        <AdjIcon className="adj-icon"/>
        <Dashboard/>
        Hello from React!
    </h1>;

export default Hello;