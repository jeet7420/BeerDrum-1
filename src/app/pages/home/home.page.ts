import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  partners: Partner[];
  filteredPartners: Partner[];
  public searchTerm: string = "";
  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partners = this.partnerService.getAllPartners();
    this.filteredPartners = this.partners;
  }
  setFilteredItems() {
    this.filteredPartners = this.partnerService.filterItems(this.searchTerm);
  }

}

