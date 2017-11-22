import * as React from "react";
import {Link} from "react-router";
import {Logo} from "../../components/logo/Logo";
import {PageContainer} from "../../components/PageContainer";
import TopMenu from "../app/TopMenu";
import SearchForm from '../app/SearchForm';
import Layout from '../../components/layout/'
import Footer from '../app/Footer';

import BlockchainStatics from './BlockchainStatics';

import CentredContainer from '../../components/CentredContainer/';

import { Header } from '../../components/Header/';

import { Title, BigLogo } from '../../components/Title/';

export function IndexPage() {
  return (
    <div>
      <Header>
        <Logo />
      </Header>

      <CentredContainer>
        <Title>Blockchain search</Title>
        <BigLogo />
        <TopMenu/>
        <SearchForm/>
        <BlockchainStatics />
      </CentredContainer>

      <Footer />
    </div>
  );
}
