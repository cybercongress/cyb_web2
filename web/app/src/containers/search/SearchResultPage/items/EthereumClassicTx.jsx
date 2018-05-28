import * as React from "react";
import { Link } from 'react-router';

import {
  Item, colors, ItemTitle, ItemContainer, ItemContainerRow, Label,
  Value, dateFormat,
  Title, Date, Row, Hash, 
  Height, Total, DetailsLink, LinkAddress,
  LinkHash
} from '../../../../components/SearchItems/';


// <Item color='#438cef'>
//       <Row>
//         <Title 
//         color='#438cef'
//         system='Ethereum'
//         number={data.tx_number}
//        />         
//       </Row>
//       <Row>
//         <Date value={data.timestamp} format='YYYY-MM-DD hh:mm' label='Mined on:'/>
//       </Row>
//       <Row>
//         <Hash value={data.hash} />
//         <Height>Fee:&nbsp;{data.fee}</Height>
//       </Row>
//       <Row>
//         <Total>Value:&nbsp;{data.value}</Total>
//       </Row>
//       <Row>
//         <DetailsLink to={`/ethereum/tx/${data.hash}`}>
//            {`seacrh.cyber.fund/ethereum/tx/${data.hash}`}
//         </DetailsLink>
//       </Row>
//     </Item>

const EthereumTx = ({ hash, value, block_time, from, to }) => {
  return (
   <Item line={colors.transaction}>
     <ItemTitle bg={colors.ethereum_classic}>Ethereum transaction</ItemTitle>
     <ItemContainer>
       <ItemContainerRow center width='33%' border='right'>
          <Label>Finalization Time:</Label>
          <Value>{dateFormat(block_time)}</Value>
       </ItemContainerRow>
       <ItemContainerRow width='33%'>
          <Label>Hash:</Label>
          <LinkHash value={hash} to={`/ethereum_classic/tx/${hash}`} />         
       </ItemContainerRow>
       <ItemContainerRow center width='33%' border='left'>
          <Label>Value:</Label>
          <Value>{value} ETH</Value>       
       </ItemContainerRow>
       {/*<ItemContainerRow width='50%' border='top'>
         <Label>From:</Label>
         <LinkAddress address={from} to={`/ethereum_classic/contract/${from}`}/>
       </ItemContainerRow>
       <ItemContainerRow width='50%' border='top'>
         <Label>To:</Label>
         <LinkAddress address={to} to={`/ethereum_classic/contract/${to}`}/>
       </ItemContainerRow>*/}
     </ItemContainer>
   </Item>   
  );
}

export default EthereumTx;