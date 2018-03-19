import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  public visible = false;
  private visibleAnimate = false;

  constructor() { }

  public show(): void{
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 1000); 
  }

  public hide(): void{
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 1000);
  }

  public onContainerClicked( event: MouseEvent ): void{
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  ngOnInit() {
  }

}
