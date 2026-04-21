import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location/housing-location-if';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
      <section>
        <form>
          <input type="text" placeholder="Filter by city" #filter (keyup)="filterResults(filter.value)"/>
        </form>
      </section>
      <section class="results">
        @for (housingLocation of filteredLocations; track $index) {
          <app-housing-location [housingLocation]="housingLocation" />
        }
      </section>
  `,
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

  housingLocations: HousingLocationInfo[] = []
  filteredLocations: HousingLocationInfo[] = []
  housingService: HousingService = inject(HousingService)
  changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef)

  constructor() {
    this.housingService.getAllHousingLocations().then((locations: HousingLocationInfo[]) => {
      this.housingLocations = locations
      this.filterResults('')
      this.changeDetectorRef.markForCheck()
    });
  } 

  filterResults(city: string) {
    this.filteredLocations = this.housingLocations
    if (city) {
      this.filteredLocations = this.filteredLocations
        .filter(h => h.city.toLowerCase().includes(city.toLowerCase()))
    }
  }
}
