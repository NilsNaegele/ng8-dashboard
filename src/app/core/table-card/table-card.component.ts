import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @HostBinding('class.projects-table') public readonly projectsTable = true;

  tableHeader: string[] = [
    'Project',
    'Responsible',
    'Client contact',
    'Deadline',
    'Progress',
  ];
  data: object[] = [
    {
      project: 'Project X',
      responsible: [
        {
          color: 'color--light-blue',
          name: 'Andrew',
        },
        {
          color: 'background-color--primary',
          name: 'Alina',
        },
        {
          color: 'color--orange',
          name: 'Mick',
        },
      ],
      email: 'nils@naegele.com',
      deadline: 'Dec 15',
      progress: 44,
      isSelected: false,
    },
    {
      project: 'Monitoring app',
      responsible: [
        {
          color: 'color--orange',
          name: 'Dennis',
        },
      ],
      email: 'chief@technology.com',
      deadline: 'Jan 1',
      progress: 14,
      isSelected: true,
    },
    {
      project: 'Christmas Party',
      responsible: [
        {
          color: 'background-color--primary',
          name: 'Jenny',
        },
        {
          color: 'color--orange',
          name: 'Barbara',
        },
      ],
      email: 'hello@dodecahedron.io',
      deadline: 'Dec 21',
      progress: 100,
      isSelected: false,
    },
    {
      project: 'Just for fun!!!',
      responsible: [
        {
          color: 'background-color--secondary',
          name: 'all teams',
        },
      ],
      email: 'contact@smile.com',
      deadline: 'Today',
      progress: 31,
      isSelected: false,
    },
  ];

}
