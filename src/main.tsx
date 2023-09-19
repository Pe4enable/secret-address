import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { WagmiConfig, createConfig, configureChains, } from 'wagmi'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './pages/routes.jsx'
import { gnosis, gnosisChiado } from 'wagmi/chains'
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';

import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [gnosis, gnosisChiado],
  [
    publicProvider()
  ]
);

const config = createConfig({
  publicClient,
  webSocketPublicClient,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <WagmiConfig config={config}>
    <RainbowKitProvider 
      theme={lightTheme({
        accentColor: '#1570ef',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small'
      },
      )} chains={chains}>
      <PageRoutes />
      </RainbowKitProvider>
    </WagmiConfig>
    
    </BrowserRouter>
  </React.StrictMode>,
)
