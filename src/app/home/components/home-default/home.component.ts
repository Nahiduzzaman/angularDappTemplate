import { Component, OnInit } from '@angular/core';
import { BlockChainService } from 'src/app/root/services/block-chain.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private blockChainService: BlockChainService) {

    }

    ngOnInit() {
        this.blockChainService.loadBlockchainData();
    }

}
