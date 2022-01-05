import { Component, OnInit, HostListener } from "@angular/core";

interface Article {
  id: number
  title: string
  content: string
  created: string
  updated: string
}

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {

  cols: number = 0
  colWidth: number = 0

  @HostListener("window:resize", []) updateCols() {
    const width: number = Math.min(window.innerWidth, 1350)
    this.cols = Math.max(Math.floor(width / 220), 1)
    this.colWidth = Math.floor(width / this.cols * 0.7)
  }

  articles: undefined | Article[]
  offset: number = 0
  limit: number = 20  // const

  fetchArticles(): void {
    this.articles = [  // request
      {id: 1, title: "1", content: "heyuiad sgihdjaduyksgado pjisuaykdfsugaihdkfsajdy adshj ads dsa dsa dsa dfsajhdsga dsa da d ad ad sad ad sad d as d sad asd as d sad s d sad a f fa fa fg", created: "today", updated: "today"},
      {id: 1, title: "1", content: "heyuiad sgihdjaduyksgado pjisuaykdfsugaihdkfsajdyg suiahdsutfdyg usuyakj", created: "today", updated: "today"},
      {id: 2, title: "2", content: "hey", created: "today", updated: "today"},
      {id: 3, title: "3", content: "hey", created: "yesterday", updated: "today"},
      {id: 4, title: "4", content: "hey", created: "yesterday", updated: "today"},
      {id: 5, title: "5", content: "hey", created: "yesterday", updated: "today"},
      {id: 6, title: "6", content: "hey", created: "yesterday", updated: "today"},
      {id: 7, title: "7", content: "hey", created: "yesterday", updated: "today"},
      {id: 8, title: "8", content: "hey", created: "yesterday", updated: "today"},
      {id: 9, title: "9", content: "hey", created: "yesterday", updated: "today"},
      {id: 1, title: "1", content: "hey", created: "today", updated: "today"},
      {id: 2, title: "2", content: "hey", created: "today", updated: "today"},
      {id: 3, title: "3", content: "hey", created: "yesterday", updated: "today"},
      {id: 4, title: "4", content: "hey", created: "yesterday", updated: "today"},
      {id: 5, title: "5", content: "hey", created: "yesterday", updated: "today"},
      {id: 6, title: "6", content: "hey", created: "yesterday", updated: "today"},
      {id: 7, title: "7", content: "hey", created: "yesterday", updated: "today"},
      {id: 8, title: "8", content: "hey", created: "yesterday", updated: "today"},
      {id: 9, title: "9", content: "hey", created: "yesterday", updated: "today"},
    ]
  }

  ngOnInit(): void {
    this.updateCols()
    this.fetchArticles()
  }

  nextPage(): void {
    this.offset += this.limit
    this.fetchArticles()
  }
}
