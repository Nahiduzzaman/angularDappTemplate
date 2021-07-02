import { Component, OnInit } from '@angular/core';
import { BlockChainService } from '../../services/block-chain.service';
import { Web3Service } from '../../services/web3.service';

@Component({
    selector: 'root',
    templateUrl: './root-default.component.html',
    styleUrls: ['./root-default.component.scss']
})
export class RootDefaultComponent implements OnInit {
    title = 'angularDapp';
    constructor(
        private web3Service: Web3Service,
        private blockChainService: BlockChainService
    ) {

    }

    ngOnInit() {
        this.web3Service.loadWeb3().then((response) => {
            this.blockChainService.loadBlockchainData();
        });
    }
}
