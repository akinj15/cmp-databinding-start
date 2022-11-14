import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() onServerCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output() onBluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  
  onAddServer(serverContent: HTMLInputElement) {
    this.onServerCreated.emit({
      serverName: serverContent.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverContent: HTMLInputElement) {
    this.onServerCreated.emit({
      serverName: serverContent.value,
      serverContent: this.serverContentInput.nativeElement.value
    }) }

  constructor() { }

  ngOnInit(): void {
  }

}
