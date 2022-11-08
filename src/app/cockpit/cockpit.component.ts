import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() onServerCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output() onBluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.onServerCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.onBluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
