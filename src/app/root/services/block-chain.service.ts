import { Injectable } from '@angular/core';
import Web3 from 'web3';
import Document from '../../../../contracts/Document.json';
declare let window: any;

@Injectable({
    providedIn: 'root'
})
export class BlockChainService {
    account: any;
    contract: any;
    docHash: any;

    constructor() { }

    async loadBlockchainData() {
        const web3 = window.web3
        // Load account
        const accounts = await web3.eth.getAccounts()
        this.account = accounts[0];
        console.log(this.account);
        const networkId = await web3.eth.net.getId()
        const networkData = Document.networks[networkId];
        if (networkData) {
            const contract = new web3.eth.Contract(Document.abi, networkData.address)
            this.contract = contract;
            this.docHash = await contract.methods.get().call();
            console.log('Dochash',this.docHash);
        } else {
            window.alert('Smart contract not deployed to detected network.')
        }
    }
}
