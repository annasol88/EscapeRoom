import { Component, OnInit } from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";
import {locationNames} from "../../models/locationNames";

@Component({
  selector: 'app-centrallowlevel',
  templateUrl: './centrallowlevel.component.html',
  styleUrls: ['./centrallowlevel.component.css']
})
export class CentrallowlevelComponent implements OnInit {
  locationTracker : LocationTrackerService;

  constructor(private _locationTracker : LocationTrackerService) {
    this.locationTracker = _locationTracker
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.StEnochTunnel, true);
  }
}