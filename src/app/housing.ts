import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location/housing-location-if';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  readonly baseUrl = 'http://localhost:3000/locations'

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.baseUrl)
    return await data.json() ?? []
  }
  async getHousingLocationById(id: number): Promise<HousingLocationInfo> {
    const data = await fetch(`${this.baseUrl}/${id}`)
    return await data.json() ?? {}
  }  
  submitApplication(application: { firstName: string; lastName: string; email: string }) {
    console.log('Application submitted:', application)
  }
}
