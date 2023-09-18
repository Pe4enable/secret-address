import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faArrowTurnDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiBot } from 'react-icons/bi';
import { useState } from 'react';
import { useNetwork } from 'wagmi';
import AddressProvider from '../components/address';
import { Connect } from '../components/connect';
import { VerxioID } from '../components/verxioid';
import { Send } from '../components/send';
import { Withdraw } from '../components/withdraw';
import logo from '../../src/assets/logo.png'
import SendReceive from '../svg/send-receive.svg';
import Shield from '../svg/shield.svg';

import { registryAddress, explorer } from '../utils/constants';

import './main.css';

export function Main() {
  const [activeTab, setActiveTab] = useState<string>('send');
  
  const { chain } = useNetwork();
  const contractAddress = registryAddress[chain?.id || 100|| 10200];
  const explorerAddress = explorer[chain?.id || 100|| 10200];

  return (
   
    <section className="layout">
      <div className="content">
        <div className="header-h">
          <div className="header-item">
            {/* <img className="logo logo-bg" src={logo} alt="Verxio" /> */}
            <img
              className="logo-default"
              src={logo}
              alt="Verxio"
              onClick={() => (document.location.href = '/')}
            />
          </div>
            <button 
            className="hbutton hbutton-lnk header-item" 
            style={{ marginLeft: '-120px' }}>
            <span> 
            VERXIO AI
              <BiBot />  
                </span>
              </button>
          <div className="header-item ">
            <Connect />
          </div>
        </div>

        <div className="promo large-block">
          <h1>
          Introducing <span className="promo-accent">Anonymous</span> & <span className="promo-accent">Effortless</span>
            <br /> {chain?.nativeCurrency.symbol || 'Crypto'} Transfers on {chain?.name.split(' ')[0] || 'any EVM'} Network
          </h1>

          <div className="benefits">
            <div className="item">
              <img src={Shield} alt="" width={24} />
              <p>
              Safeguard Your Transactions with <strong>Untraceable&nbsp;Stealth Addresses</strong>{' '}
              
              </p>
            </div>
            <div className="item">
              <img src={SendReceive} alt="" width={24} />
              <p>
                Send and receive {chain?.nativeCurrency.symbol || 'Crypto'}{' '}
                <strong>privately</strong>
              </p>
            </div>
          </div>
        </div>

        <AddressProvider>
          <VerxioID />

          <div className="large-block">
            <div className="nav-tabs">
              <div
                className={activeTab === 'send' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('send')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowRight} />
                  &nbsp; Send
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'Crypto'}
                </span>
              </div>
              <div
                className={activeTab === 'withdraw' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('withdraw')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                  &nbsp; Receive
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'Crypto'}
                </span>
              </div>

              <div
                className={activeTab === 'spend' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('spend')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                  &nbsp; Spend
                </h2>
                <span className="super" style={{color: '#f99bcd'}}>
                Gnosis Pay
                </span>
              </div>
            </div>

            <div
              className="pane"
              style={{ display: activeTab === 'send' ? 'block' : 'none' }}
            >
              <Send />
            </div>
            <div
              className="pane"
              style={{
                display: activeTab === 'withdraw' ? 'block' : 'none',
              }}
            >
              <Withdraw />
            </div>
            <div
              className="pane"
              style={{ display: activeTab === 'spend' ? 'block' : 'none' }}
            >
              <p>Spend your crypto anywhere with Gnosis Pay powered Visa Debit Card!</p>
              <button 
              className="hbutton hbutton-lnk header-item" 
              onClick={() => window.location.href = 'https://gnosispay.com/app/signup'}
              >
                <span> 
              Get Started
                </span>
              </button>
            </div>

          </div>
        </AddressProvider>

        <div className="footer">
          <a
            href="https://youtu.be/zeQw4JHy00o"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              Demo video &nbsp;
              <FontAwesomeIcon icon={faYoutube} />
            </span>
          </a>
          <a
            href={`https://${explorerAddress}/address/${contractAddress}`}
            style={{ flexGrow: 1 }}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Registry contract &nbsp;
              <FontAwesomeIcon
                icon={faArrowRight}
                transform={{ rotate: -45 }}
              />
            </span>
          </a>
          <span className="version">v1.0.0</span>
        </div>
      </div>
    </section>
  );
}
