import {Component} from '@angular/core';
import { Table } from '../../models/table';

const TABLE_DATA: Table[] = [{ id: 1, name: 'Forest', description: 'An encounter table for use in forested environtments.'},
                             { id: 2, name: 'Sewers', description: 'An encounter table for use in the sewers of a large city.'}];

@Component({
  selector: 'ui-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = TABLE_DATA;
}
