import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // ...
  photos: any[] = [];
  page = 1; // Initial page number
  limit = 10; // Number of items to load per page
  loading = false; // Flag to track if data is being loaded

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true; // Set loading flag to true
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos?_page=${this.page}&_limit=${this.limit}`)
      .subscribe((data) => {
        // Append new data to existing array
        this.photos = [...this.photos, ...data];
        this.loading = false; // Set loading flag to false after data is loaded
      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Check if user has scrolled to the bottom of the page
      if (!this.loading) {
        // If not already loading data, fetch more data
        this.page++;
        this.fetchData();
      }
    }
  }

  loadMoreData() {
    // Increment page number to load next page
    this.page++;
    this.fetchData();
  }
}
