# Verxio Protocol | Receive crypto on any EVM blockchain without revealing your personal information 


Verxio Protocol is a non-custodial solution that uses stealth addresses to enable users to receive crypto on the Gnosis Blockchain without revealing the receiver's real address; which serves as their identity on the blockchain.


Verxio is heavily inspired by [Vitalik's recent article on stealth addresses](https://vitalik.eth.limo/general/2023/01/20/stealth.html).

## 📝 Project Description

### 📺 Background & Context
- Issue Addressed: Verxio Protocol addresses the pressing concern of inadequate privacy in blockchain transactions. While the blockchain guarantees transparency and immutability, it simultaneously exposes sensitive details of transactions, such as sender and recipient addresses. This lack of privacy imposes significant risks on both individuals and businesses, potentially connecting their financial actions to real-world identities.

- Fundamental Privacy: Privacy holds a crucial role in financial transactions. Without a robust privacy layer, users remain vulnerable to an array of risks:

    - Identity Exposure: Open blockchain transactions create an avenue for observers to correlate transactions with specific people or entities. This jeopardizes financial privacy and exposes individuals to potential targeting or surveillance.

    - Financial Profiling: In-depth profiling of individuals and businesses becomes possible through the analysis of blockchain transactions. This includes identifying spending habits, income sources, and financial associations. Such data can be exploited for targeted ads, discrimination, or even extortion.

    - Security Gaps: Transparent blockchains, when repeatedly used for transactions, render users susceptible to hacking and phishing threats. Criminals can analyze transaction histories to discern patterns, monitor balances, and exploit security vulnerabilities.

    - Business Exposure: Transparent transactions inadvertently reveal confidential financial information of companies, like sales figures, supply chain connections, and partnerships. Competitors can leverage this intel to gain an edge, potentially undermining business competitiveness.

    - Regulatory Hurdles: Certain industries, such as healthcare and finance, mandate stringent privacy regulations. Transparent blockchain transactions could clash with these standards, resulting in legal complications or penalties for non-compliance.

- Significance: Addressing this issue assumes paramount importance due to its direct impact on safeguarding financial confidentiality. Preserving the integrity of personal and corporate information from prying eyes is central. By introducing a user-centric solution that leverages stealth addresses for anonymous transactions, Verxio Protocol empowers users to regain control over their financial privacy and alleviate the potential pitfalls linked with identity exposure.

### ☄️ Value Proposition
- Enhanced Privacy: Verxio Protocol utilizes stealth addresses, allowing users to receive funds without revealing their real addresses. This provides a significant level of privacy for individuals and businesses, ensuring that their financial activities are shielded from prying eyes.

- User-Friendly Solution: Verxio Protocol aims to be accessible and user-friendly for both power users and non-power users. The generation and usage of Verxio Protocol IDs and stealth addresses are designed to be simple and intuitive, enabling a wide range of users to adopt and utilize the solution without technical complexity.

- Affordability and Speed: Verxio Protocol is built on the Gnosis Blockchain, chosen for its fast and affordable transactions. By leveraging Gnosis blockchain, Verxio Protocol offers users the benefits of privacy without sacrificing transaction speed or incurring high fees commonly associated with other privacy-focused solutions.

- Bridge the Gap: Verxio Protocol fills the gap between expensive and complex privacy solutions, such as Monero, and non-private transfers on transparent blockchains. It provides an intermediate solution that offers a significant level of privacy without the need for specialized tools or high costs.

- Wide Applicability: Verxio Protocol's privacy solution can be applied to various use cases. It can benefit individuals who want to keep their financial transactions private, businesses that need to protect their financial information, and anyone concerned about the risks associated with revealing their identity during transactions.

- Market Differentiation: Verxio Protocol stands out in the market by offering a unique approach to privacy in blockchain transactions. While other solutions rely on heavy computations or complex methodologies, Verxio Protocol simplifies the process with stealth addresses and Verxio Protocol IDs, making it more accessible and user-friendly.

### ✒ Technical Description
- The Verxio Protocol solution implements stealth addresses on the Gnosis Blockchain using a combination of cryptographic techniques to ensure transaction security and user privacy. Let’s break down the key steps and encryption methods involved:

- Stealth Addresses Generation:
    Receiver, generates a root spending key (receiver private key) and computes a stealth meta-address (receiver public key or receiver’s address) using elliptic curve cryptography. This stealth meta-address (receiver’s address) becomes a publicly known identifier for the receiver on the blockchain.

- Ephemeral Key Generation:
    The Sender, generates an ephemeral key (sender’s private key) which the sender keeps secret. This key is like a temporary secret code.

- Shared Secret Creation:
    The Sender combines his ephemeral key (sender’s private key) with Receiver’s stealth meta-address (receivers public key) to create a shared secret (S). This shared secret is a private connection between Sender and Receiver.

- Ephemeral Public Key Publishing:
    Sender creates an ephemeral public key (senders public key) from his ephemeral key (senders private key) and publishes it on a public registry. This public key can be seen by anyone.

- Transaction Process:
    Sender sends funds to a stealth address, which is derived from the combination of his ephemeral key (senders private key) and Receiver’s meta-address (receivers public key).

- Recipient’s Discovery:
    Receiver scans the public registry for ephemeral public keys (senders public key) and tries to unlock special addresses (stealth addresses) using his spending key (receivers private key) and the shared secrets (S). If funds are found in an address, Receiver can access them.

- Address Ownership and Privacy:
    The transaction details are recorded on the blockchain, but the connection between the recipient’s real address and the stealth address remains private. This adds a layer of privacy by making it difficult for external observers to link transactions to specific recipients.

- The cryptographic techniques used in this process include:

    Elliptic Curve Cryptography (ECC): This is used to generate private and public keys, compute shared secrets, and create addresses. ECC provides a secure way to perform mathematical operations that ensure transaction security and privacy.

    Hash Functions: Hashing is used to derive addresses from public keys and shared secrets. Hash functions are one-way functions that add an extra layer of security to the process.

    Public Key Registries: The public registry where ephemeral public keys are published allows participants (like Receiver) to scan and identify stealth addresses. This mechanism helps maintain privacy without revealing the actual recipient’s address.

  - Verxio AI:
   Users can engage the GPT-powered Verxio AI assistant that can offer feedback about any question regarding Gnosis Blockchain.

The Verxio Protocol solution leverages these cryptographic methods to create a system where transactions are secure, and recipient privacy is preserved through the use of stealth addresses.

### 💻 Implementation
- We have started with a standard Hardhat project and added essential methods to the StealthAddress contract. To enhance credibility, we intentionally avoided making the contract upgradeable, as there's no on-chain governance currently. If an upgrade is needed, we'll deploy a new version and provide client-side support.
- Next, we developed the UI/UX using React and TypeScript, focusing on a simple yet elegant design for both power and non-power users. The UI colors and feel is being build keeping in mind the Gnosis Blockchain.
- We used wagmi library for blockchain interactions which streamlined the process.
- The elliptic library handled the complex math involved with elliptic curves, and both libraries featured TypeScript typings, making them a joy to work with.
- Tools Used: Solidity, Hardhat, Gnosis Blockchain, React, Typescript, Wagmi and Metamask.

### 👥 Intended Users
- The intended users of Verxio Protocol would be anyone who values privacy in their transactions and wants to keep their identity hidden. This could include individuals who want to keep their financial transactions private, businesses that want to protect their financial information, or anyone who wants to avoid the risks associated with revealing their identity in a transaction.
- Verxio Protocol is designed to be user-friendly for both power and non-power users, making it accessible to a wide range of people.


### ☄️ What's next?
- Currently, Verxio Protocol only supports native coin transfers(xDAI). However, adding support for tokens and NFTs would greatly enhance its utility. We are considering implementing relayer nodes to mint and sell notes as tokens (or NFTs) in exchange for covering user fees on transfers.
- This approach allows users to maintain their anonymity while using note tokens to request relayers to cover fees and pay for transactions. Competition between relayers could help keep transfer fees reasonable.
- Making it live on the Gnosis Mainnet 😉
- Expanding Verxio Protocol by enabling cross-chain transactions. Additionally, gas optimization in the StealthAddress contract and its interaction with the receiving side can be improved.
- Obtaining a legal opinion on Verxio Protocol's regulatory compliance would be beneficial. However, since the StealthAddress contract is on the blockchain and the code is available on GitHub, funds will remain accessible even if the website is shut down.
- Future UX improvements include notifications for funds received on new controlled stealth addresses and a mobile app (although the website is mobile-friendly). The possibilities are endless!

### 🌟 Conclusion
- Verxio Protocol is a user-friendly and innovative solution that addresses the growing need for privacy in blockchain transactions. By leveraging stealth addresses and the Gnosis Blockchain, Verxio Protocol provides a simple and cost-effective way for users to keep their financial transactions private. With a substantial market opportunity and a focus on usability, Verxio Protocol has the potential to become a leading privacy solution in the blockchain industry.

### 💪 Deployed Contract Addresses (Gnosis Chiado Testnet)
- StealthAddress Contract: [0x4838854e5150E4345Fb4Ae837E9FcCa40D51F3Fe](https://gnosis-chiado.blockscout.com/address/0x4838854e5150E4345Fb4Ae837E9FcCa40D51F3Fe)

### 💪 Demo Link
- https://verxio-finance.vercel.app/

### 💪 Transactions
- https://gnosis-chiado.blockscout.com/tx/0x629a6e045796e32f46bd39ef6dd72d1dc09bd81b5d7bd8a4531f1d6c7f686f6e
- https://gnosis-chiado.blockscout.com/tx/0xed88ca9ac033e7c8bad60df13190077c7bd0d4875857d10288280f5e4534aea9
- https://gnosis-chiado.blockscout.com/tx/0xaaa7d038ffe5e5dd3f510d57ad238c5a8cc2866f696271393988b4302a0a545a
- https://gnosis-chiado.blockscout.com/tx/0x9e817dd4bbacfa63d78217410cd3d22557a463053a592ff091d45710b3e242ae


### 💻 Deploying the Verxio Protocol on local machine

#### Pre-requisites

- Node version should be >=16.0.0
- npm nersion should be >=9.0.0
- Receivers Address should have some funds in their wallet address


Clone the repository

install dependencies using **yarn** or **npm**

```sh
yarn

or

npm install
```

start the development server
```sh
yarn start

or

npm run dev
```

build with production mode
```sh
yarn build

or

npm run build
```
