import * as React from "react";
import {BlockComponent} from "../../components/BlockComponent";
import {connect} from "react-redux";
import {CfState} from "../../model/CfState";
import {CfActions, BitcoinTxResponse} from "../../actions/CfActions";
import withRouter from "react-router/es/withRouter";
import JSONTree from "react-json-tree";
import {reactJsonTreeTheme} from "./common";

class BitcoinTxPageComponent extends React.Component<{ bitcoinTx, getData, txId }, {}> {
  componentDidMount() {
    const {txId, getData} = this.props;

    getData(txId);
  }

  render() {
    const {bitcoinTx} = this.props;

    return (
      <BlockComponent
        title={"Bitcoin Transaction"}
        data={bitcoinTx}
        blockView={(data: BitcoinTxResponse) => {
          return (
            <JSONTree
              data={data}
              theme={reactJsonTreeTheme}
              invertTheme={true}
            />
          );
        }}
      />
    );
  }
}

export const BitcoinTxPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(BitcoinTxPageComponent));

function mapStateToProps(state: CfState, ownProps) {
  return {
    txId: ownProps.routeParams.txId,
    bitcoinTx: state.data.bitcoinTx.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: (txId: string) => {
      dispatch({
        type: CfActions.GET_BITCOIN_TX,
        payload: {txId}
      });
    }
  };
}

