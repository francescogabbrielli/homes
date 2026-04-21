import {Routes} from '@angular/router'
import {Home} from './home/home'
import {HousingDetails} from './housing-details/housing-details'

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: HousingDetails,
    title: 'Home details',
  },
]
export default routeConfig