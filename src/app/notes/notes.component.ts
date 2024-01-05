import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  @ViewChild("title", { static: true }) titleElement: ElementRef;
  @ViewChild("status", { static: true }) statusElement: ElementRef;

  statusList: string[] = ["All", "Active", "Completed"];
  selectedTab: string = "All";
  initialNotes: Note[] = [];
  filteredNotes: Note[] = [];

  ngOnInit(): void {}

  addNote(): void {
    this.initialNotes.push({
      title: this.titleElement.nativeElement.value,
      status: this.statusElement.nativeElement.value,
    });

    this.filterNotes();
  }

  onTabClicked(status: string): void {
    this.selectedTab = status;
    console.log("this.selectedTab ==>", this.selectedTab);
    this.filterNotes();
  }

  filterNotes(): void {
    switch (this.selectedTab) {
      case "Active":
        this.filteredNotes = this.initialNotes.filter((res) => {
          return res.status === "active";
        });
        break;

      case "Completed":
        this.filteredNotes = this.initialNotes.filter((res) => {
          return res.status === "completed";
        });
        break;

      default:
        this.filteredNotes = this.initialNotes;
        break;
    }
  }
}

export interface Note {
  title: string;
  status: string;
}
