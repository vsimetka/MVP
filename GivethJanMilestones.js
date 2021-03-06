var Adam  = "0xC2d9F9c9dD6f76784a8f56f936953b6661A12da8";   // AP
var Barry = "0x39cfe11c1321c7b506eb1d967af6ea35dd6ef304";   // BW
var Griff = "0x839395e20bbb182fa440d08f850e6c7a8f6f0780";   // Griff
var Gian  = "0x82aEB1D8939f514318449fa8Ec704A94DC16E01D";   // Gian
var Jordi = "0x1dba1131000664b884a1ba238464159892252d3a";   // Jordi
var Grace = "0x64A1C14aCF4D3d1F8F0316f6C924Ec8f35a27BCF";
var Vojtech = "0xf9a2595bFAe0694f114042679b3A9a536Bb7A5D8"; //Vojtech
var MultisigAddy = "0x32bacc8B241FB172fEE18bDa32527126c6f3c5f7";
var ETHprice = 10;



var vaultAbi = [{"constant":true,"inputs":[],"name":"maxSecurityGuardDelay","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"escapeHatch","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idPayment","type":"uint256"}],"name":"executePayment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newTimeLock","type":"uint256"}],"name":"setTimelock","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newEscapeCaller","type":"address"}],"name":"changeEscapeCaller","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfAuthorizedPayments","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_authorize","type":"bool"}],"name":"authorizeSpender","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idPayment","type":"uint256"}],"name":"cancelPayment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idPayment","type":"uint256"},{"name":"_delay","type":"uint256"}],"name":"delayPayment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_description","type":"string"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_paymentDelay","type":"uint256"}],"name":"authorizePayment","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"authorizedPayments","outputs":[{"name":"description","type":"string"},{"name":"spender","type":"address"},{"name":"earliestPayTime","type":"uint256"},{"name":"canceled","type":"bool"},{"name":"paid","type":"bool"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"securityGuardDelay","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"receiveEther","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"securityGuard","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newSecurityGuard","type":"address"}],"name":"setSecurityGuard","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"escapeDestination","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeLock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allowedSpenders","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_maxSecurityGuardDelay","type":"uint256"}],"name":"setMaxSecurityGuardDelay","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"absoluteMinTimeLock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"escapeCaller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_escapeCaller","type":"address"},{"name":"_escapeDestination","type":"address"},{"name":"_absoluteMinTimeLock","type":"uint256"},{"name":"_timeLock","type":"uint256"},{"name":"_securityGuard","type":"address"},{"name":"_maxSecurityGuardDelay","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"idPayment","type":"uint256"},{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PaymentAuthorized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"idPayment","type":"uint256"},{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PaymentExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"idPayment","type":"uint256"}],"name":"PaymentCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EtherReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"spender","type":"address"},{"indexed":false,"name":"authorized","type":"bool"}],"name":"SpenderAuthorization","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"EscapeCalled","type":"event"}];
var vault = web3.eth.contract(vaultAbi).at(vaultAddr);




var milestonesBytes = milestoneTrackerHelper.milestones2bytes( {
        description:"Basic UI for Milestone Tracker: Developing the basic UI architecture for the Milestone Tracker Contract enabling anyone using MetaMask, Status.im, Mist, or Parity to generate new milestones and effectively implement all features in the Milestone Tracker Contract, this basic UI will be focused on functionality, enabling integration and easy customization for this UI to be added to other websites of various designs: 5000 USD in ETH at the market rate to Jordi and Vojtech",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-04-01').getTime() /1000),
        milestoneLeadLink:Jordi,
        reviewer:Jordi,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "Milestone Tracker UI",
            Jordi,
            web3.toWei(5000/ETHprice),
            0
        )
    }, {
        description:"Basic Governance Smart Contract: Designing and developing a basic DAO-like Smart Contract to allow the token holders to use their tokens to make group decisions (e.g. to determine if the completion of a milestone is valid(acting as a reviewer) and to accept  ), and deploying it on the Ethereum blockchain to be used with the Giveth Campaign after thorough testing: 2500 USD in ETH at the market rate to Jordi and Friends",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-04-01').getTime() /1000),
        milestoneLeadLink:Jordi,
        reviewer:Jordi,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "Basic DAO",
            Jordi,
            web3.toWei(2500/ETHprice),
            0
        )
    }, {
        description:"Delegated Pledging Smart Contract Research: We are still in the research phase, this may not be possible due to gas constraints and game theoretical attacks. Designing a basic liquid democracy-like Smart Contract (to allow Donors to send their tokens to delegates so that decisions about which project to invest in can be done by the Delegate, not the donor) is much more complicated than expected. This milestone will be completed when a design is understood and work can begin on developing a smart contract that can be deployed on the Ethereum blockchain: 2500 USD in ETH at the market rate to Jordi and Friends",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-07-01').getTime() /1000),
        milestoneLeadLink:Jordi,
        reviewer:Jordi,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "Delegated Pledging",
            Jordi,
            web3.toWei(2500/ETHprice),
            0
        )
    }, {
        description: "Reviewing contracts and potentially adding invariance to the vault: Reviewing the delegated pledging contract, the basic DAO contract and any other crazy ideas Jordi comes up with :-) looking for bugs and making the final approval before deploying live on the blockchain: $300 USD in ETH at the market rate to Barry White",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-05-01').getTime() /1000),
        milestoneLeadLink:Jordi,
        reviewer:Jordi,
        reviewTime:86400*7,
        payDestination:vaultAddr,
            payData:vault.authorizePayment.getData(
            "Testing and Invariance",
            Barry,
            web3.toWei(300/ETHprice),
            0
        )
    }, {
        description:"The Airbnb in London for Grace, Griff, Jordi, and Vojtech. We are launching Giveth officially to the public at the Blockchain-Expo and we are staying close to Colony's offices in Shoreditch so after the Expo we can look to collaborate with Colony as much as possible as both projects evolve. The Airbnb is to be reimbursed in full: $1164 USD in ETH at the market rate to Griff Green, the URL shows the receipt posted on IPFS",
        url:"https://ipfs.pics/QmX6m4K59WHJRcPjVSUE2p56hCqADpQoevcEvbDxZwStsQ",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-05-01').getTime() /1000),
        milestoneLeadLink:Griff,
        reviewer:Griff,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "London Airbnb",
            Griff,
            web3.toWei(1164/ETHprice),
            0
        )
    }, {
        description:"Build the Giveth Website make it beautiful and functional... I don't know how to break that up (TODO Figure this out) :-D xxx in ETH at the market rate to Grace Torrellas",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-05-01').getTime() /1000),
        milestoneLeadLink:Grace,
        reviewer:Griff,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "Making the website",
            Grace,
            web3.toWei(1500/ETHprice),
            0
        )
    }, {
        description:"Promote Giveth and manage the Giveth Brand, this involves building the webstie and do all the little things that make this project work (TODO FIGURE THIS OUT) xxx in ETH at the market rate to Grace Torrellas",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-05-01').getTime() /1000),
        milestoneLeadLink:Grace,
        reviewer:Griff,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "Making the website",
            Grace,
            web3.toWei(1500/ETHprice),
            0
        )
    }, {
        description:"Promote Giveth and coordinate between all the interested parties and teams; lead the project making sure things get done and the project progresses: a weekly salary of $350 + Code review, adding descriptive comments, admin, editing ReadMes and doing any thing else needed to support the development $35/hour + $150 per blog post in ETH at the market rate to Griff Green",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-05-01').getTime() /1000),
        milestoneLeadLink:Jordi,
        reviewer:Griff,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "Making Giveth Happen",
            Griff,
            web3.toWei(2500/ETHprice),
            0
        )
    }, {
        description:"Build a new Giveth website. The aim is to have a very clean design similar to https://slock.it but respecting our own brand theme and colours. The work includes analysis of the website requirements, looking at competition, UML modelling (use case, sequence diagrams), designing distinct pages and infographics. We need to link Medium blog as much as their API allows, campaigns, link to the future Giveth UI...",
        url:"http://www.giveth.io",
        minDoneDate:Math.floor(new Date('2017-01-01').getTime() /1000),
        maxDoneDate:Math.floor(new Date('2017-05-01').getTime() /1000),
        milestoneLeadLink:Vojtech,
        reviewer:Griff,
        reviewTime:86400*7,
        payDestination:vaultAddr,
        payData:vault.authorizePayment.getData(
            "Making the website",
            Vojtech,
            web3.toWei(3000/ETHprice),
            0
        )
    });
