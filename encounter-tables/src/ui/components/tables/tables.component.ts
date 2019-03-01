import { Component, OnInit } from '@angular/core';

import { Table } from '../../models/table';

@Component({
  selector: 'ui-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {

  tables: Table[];

  constructor() { }

  ngOnInit() {
    this.tables = [ { id: 1, name: 'Forest', description: 'An encounter table for use in forested environtments.'},
                    { id: 2, name: 'Sewers', description: 'An encounter table for use in the sewers of a large city.'}];
  }

}
