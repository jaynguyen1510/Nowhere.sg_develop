import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import NewLetterBox from '../components/NewLetterBox';
import OutPolicy from '../components/OutPolicy';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OutPolicy />
            <NewLetterBox />
        </div>
    );
};

export default HomePage;
