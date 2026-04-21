import { ChangeDetectionStrategy, Component, resource, signal, inject, computed } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location/housing-location-if';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
      <section>
        <form>
          <input type="text" placeholder="Filter by city" #filter (keyup)="this.filter.set(filter.value)"/>
        </form>
      </section>
      <section class="results">
        @for (housingLocation of filteredLocations(); track $index) {
          <app-housing-location [housingLocation]="housingLocation" />
        }
      </section>
  `,
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  
  housingService: HousingService = inject(HousingService)

  filter = signal('')

  housingResource = resource({
    loader: () => this.housingService.getAllHousingLocations(),
  })

  filteredLocations = computed(() => {
    const housingLocations = this.housingResource.value() ?? [] as HousingLocationInfo[]
    if (!this.filter()) 
      return housingLocations
    else
      return housingLocations.filter(h => h.city.toLowerCase().includes(this.filter().toLowerCase()))
  })

}
