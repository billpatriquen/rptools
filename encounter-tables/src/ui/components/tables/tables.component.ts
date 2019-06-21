import {Component} from '@angular/core';
import { Table } from '../../models/table';

const TABLE_DATA: Table[] = [{ id: 1, name: 'Forest Encounters', description: 'Encounters in a heavily forested area.'},
                             { id: 2, name: 'Ocean Encounters', description: 'Encounters on the open sea.'},
                             { id: 3, name: 'Desert Encounters', description: 'Encounters in the desert.'},
                             { id: 4, name: 'Dungeon Encounters', description: 'Generic encounters in a typical dungeon environment.'},
                             { id: 5, name: 'Badlands Encounters', description: 'Encounters in the badlands.'},
                             { id: 6, name: 'Forest Encounters (Night)', description: 'Nighttime encounters in a forest.'},
                             { id: 7, name: 'Necropolis Encounters', description: 'Encounters for a haunted necropolis.'},
                             { id: 8, name: 'Cloud Palace Encounters', description: 'Encounters in a cloud giant\'s palace.' },
                             { id: 9, name: 'Subterranean Encounters', description: 'Encounters in a subterranean cave system.'},
                             { id: 10, name: 'City Encounters', description: 'Encounters in a large city.'},
                             { id: 11, name: 'Sewer Encounters', description: 'Encounters in the rotten sewers of a large city.'},
                             { id: 12, name: 'Arctic Encounters', description: 'Encounters in an arctic environment.'},
                             { id: 13, name: 'City of Brass Encounters', description: 'Encounters in the City of Brass.'},
                             { id: 14, name: 'Feywild Encounters', description: 'Encounters in the Feywild.'},
                             { id: 15, name: 'Abyss Encounters', description: 'Encounters in the Abyss.'}];

@Component({
  selector: 'ui-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent {
  tables = TABLE_DATA;
}