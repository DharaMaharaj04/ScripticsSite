import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import Works from './pages/Works';
import AboutUs from './pages/AboutUs';
import SignalProcessing from './pages/SignalProcessing';
import NaturalLanguageProcessing from './pages/NaturalLanguageProcessing';
import MathematicalModellingOptimization from './pages/MathematicalModellingOptimization';
import AIAutomation from './pages/AIAutomation';
import BigDataAnalysis from './pages/BigDataAnalysis';
import BusinessIntelligence from './pages/BusinessIntelligence';
import ComputerVision from './pages/ComputerVision';
import DeepLearning from './pages/DeepLearning';
import DistributedComputing from './pages/DistributedComputing';
import ScripticsAIGaming from './pages/ScripticsAIGaming';
import StatisticalDataAnalysis from './pages/StatisticalDataAnalysis';
import WearableComputing from './pages/WearableComputing';
import Health from './pages/Health';
import Automative from './pages/Automative';
import BFSI from './pages/BFSI';
import CapitalMarket from './pages/CapitalMarket';
import Chemical from './pages/Chemical';
import Dental from './pages/Dental';
import Energy from './pages/Energy';
import Insurance from './pages/Insurance';
import Retail from './pages/Retail';
import ConsumerGoods from './pages/ConsumerGoods';
import OilAndGas from './pages/OilAndGas';
import MediaEntertainment from './pages/MediaEntertainment';
import AmazonQuickSight from './pages/AmazonQuickSight';
import CsAi from './pages/CsAi';
import BPO from './pages/BPO';
import ThinkboxStudio from './pages/ThinkboxStudio';
import Devops from './pages/Devops';
import AwsElemental from './pages/AwsElemental';
import Migration from './pages/Migration';
import DataEngineeringAnalytics from './pages/DataEngineeringAndAnalytics';
import AmazonRelationalDatabaseService from './pages/AmazonRelationalDatabaseService';
import AwsControlTower from './pages/AwsControlTower';
import Page404 from './pages/404';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import AmazonEKS from './pages/AmazonEKS';
import MicrosoftOnAws from './pages/MicrosoftOnAws';
import MachineLearning from './pages/MachineLearning';
import ApplicationModernization from './pages/ApplicationModernization';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-204814637-2');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <div className="App">
      <Router>
        <Header/>
          <Helmet>
            <title>Scriptics Technologies</title>
            <meta name="description" content="Scriptics Technologies is a software and IT services company serving clients in Canada, the US, UK, UAE."/>
            <meta name="keywords" content="software company in india, Scriptics Technologies, IT Company"/>
          </Helmet>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/case-studies' component={Blog}/>
            <Route exact path='/case-study/:id' component={BlogPage} />
            <Route exact path='/works' component={Works}/>
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/signal_processing' component={SignalProcessing} />
            <Route exact path='/natural_language_processing' component={NaturalLanguageProcessing} />
            <Route exact path='/ai_automation' component={AIAutomation} />
            <Route exact path='/mathematical_modelling_optimization' component={MathematicalModellingOptimization} />
            <Route exact path='/big_data_analysis' component={BigDataAnalysis} />
            <Route exact path='/business_intelligence' component={BusinessIntelligence} />
            <Route exact path='/computer_vision' component={ComputerVision} />
            <Route exact path='/deep_learning' component={DeepLearning} />
            <Route exact path='/distributed_computing' component={DistributedComputing} />
            <Route exact path='/scriptics_ai_gaming' component={ScripticsAIGaming} />
            <Route exact path='/statistical_data_analysis' component={StatisticalDataAnalysis} />
            <Route exact path='/wearable_computing' component={WearableComputing} />
            <Route exact path='/industry_health' component={Health} />
            <Route exact path='/industry_automative' component={Automative} />
            <Route exact path='/industry_bfsi' component={BFSI} />
            <Route exact path='/industry_capital_market' component={CapitalMarket} />
            <Route exact path='/industry_checmical' component={Chemical} />
            <Route exact path='/industry_dental' component={Dental} />
            <Route exact path='/industry_energy' component={Energy} />
            <Route exact path='/industry_insurance' component={Insurance} />
            <Route exact path='/industry_retail' component={Retail} />
            <Route exact path='/industry_consumer_goods' component={ConsumerGoods} />
            <Route exact path='/industry_oil_and_gas' component={OilAndGas} />
            <Route exact path='/industry_media_entertainment' component={MediaEntertainment} />
            <Route exact path='/case_study_automation' component={CsAi} />
            <Route exact path='/case_study_bpo' component={BPO} />
            <Route exact path='/thinkbox_studio' component={ThinkboxStudio} />
            <Route exact path='/devops' component={Devops} />
            <Route exact path='/aws_elemental' component={AwsElemental} />
            <Route exact path='/migration' component={Migration} />
            <Route exact path='/amazon_quicksight' component={AmazonQuickSight} />
            <Route exact path='/data_engineering_and_analytics' component={DataEngineeringAnalytics} />
            <Route exact path='/amazon_relational_database_service' component={AmazonRelationalDatabaseService} />
            <Route exact path='/aws_control_tower' component={AwsControlTower} />
            <Route exact path='/amazon_elastic_kubernetes_service' component={AmazonEKS} />
            <Route exact path='/microsoft_on_aws' component={MicrosoftOnAws} />
            <Route exact path='/machine_learning' component={MachineLearning} />
            <Route exact path='/application_modernization' component={ApplicationModernization} />
            <Route component={Page404} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
