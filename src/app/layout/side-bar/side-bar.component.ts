import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  public title = 'ng8-dash';
  public menu = [
    { name: 'Classic Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    { name: 'Custom Dashboard', link: '/app/dashboard-custom', icon: 'view_quilt' },
    {
      name: 'UI',
      children: [
        ...[
          'buttons',
          'cards',
          'colors',
          'forms',
          'icons',
          'typography',
          'tables',
        ].map(ui => ({
          name: ui[0].toUpperCase() + ui.slice(1),
          link: `/ui/${ui}`,
        })),
        {
          name: 'Right sidebar',
          link: '/ui/right-sidebar',
        },
      ],
      icon: 'view_comfy',
    },
    { name: 'Components', link: '/app/components', icon: 'developer_board' },
    { name: 'Account', link: '/app/forms', icon: 'person' },
    {
      name: 'Maps', icon: 'map', children: [
      { name: 'Simple map', link: '/maps/simple' },
      { name: 'Advanced map', link: '/maps/advanced' },
      ],
    },
    { name: 'Charts', link: '/app/charts', icon: 'multiline_chart' },
    {
      name: 'Pages', children: [
      { name: 'Sign in', link: '/pages/login' },
      { name: 'Sign up', link: '/pages/sign-up' },
      { name: 'Forgot password', link: '/pages/forgot-password' },
      { name: '404', link: '/pages/error' },
      ],
      icon: 'pages',
    },
  ];

}
