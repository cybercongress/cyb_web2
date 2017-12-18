import * as React from "react";
import withRouter from "react-router/es/withRouter";

import App from '../app/';
     
import { connect } from 'react-redux';

import {Injector} from "../../injector";
const {
  chaingearApi
} = Injector.of();

import { showTokensDetails, getSystemLogoUrl, closeConnection } from '../../modules/chaingear';

import TradesTable from './TradesTable';
import PriceChart from './PriceChart';
import OrderTables from './OrderTables';


import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from '../../components/Table/';


class TokensDetails extends React.Component {
  componentDidMount() {
    const { symbol } = this.props;
    this.props.showTokensDetails(symbol);
  }

  componentWillUnmount(){
    this.props.closeConnection();
  }

  render() {
    const { crowdsalesDetails } = this.props;
    console.log(' >> ', crowdsalesDetails)
    return (
      <div>
         {crowdsalesDetails.system ? (
           <div>
             <Paper>
               <div style={{ padding: 20 }}>
               <img width={50} src={getSystemLogoUrl(crowdsalesDetails, chaingearApi.imageUrl())} />
               <h2 className='title'>{crowdsalesDetails.system}</h2>
               <h3 className='subtitle'>{crowdsalesDetails.token.symbol}{' '}{crowdsalesDetails.descriptions.state}{' '}{crowdsalesDetails.descriptions.system_type}</h3>
               <h2 className='title'>Links:</h2>
               <div className='tags'>
               {crowdsalesDetails.links.map(link => (
                 <a key={link.url} className='tag' href={link.url}>
                   {link.icon && <img style={{ marginRight: 10 }} width={20} src={chaingearApi.imageUrl() + link.icon} />} {link.name}
                 </a>
                ))}
               </div>
               </div>
             </Paper>
             <div style={{
              marginTop: 50,
              marginBottom: 50
             }}>
              <PriceChart 
    
              />
             </div>
             <TradesTable />
                      
             <div style={{ marginTop: 20 }}>
               You can improve <a href={`https://github.com/cyberFund/chaingear/blob/gh-pages/sources/${crowdsalesDetails.system}/${crowdsalesDetails.system}.toml`}>{crowdsalesDetails.system}'s</a> page on Github.
             </div>
           </div>
         ) : (
           <div>
             loading...
           </div>
         )}
      </div>
    );    
  }
}

      //       width={900}
      // height={400}
      // margin={{
      //   top: 0,
      //   bottom: 0,
      //   left: 0,
      //   right: 0
      // }}

export default withRouter(connect(
  (state, ownProps) => ({
    symbol: ownProps.routeParams.symbol,
    crowdsalesDetails: state.chaingear.tokensDetails.data
  }),
  { showTokensDetails, closeConnection }
)(TokensDetails));
