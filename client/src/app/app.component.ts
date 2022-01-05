import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "client"
  padding: number = Math.max(window.innerWidth - 1200, 0) / 2

  @HostListener("window:resize", []) updatePadding() {
    this.padding = Math.max(window.innerWidth - 1200, 0) / 2
  }
}
