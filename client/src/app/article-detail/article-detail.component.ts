import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

import { Article } from "../../data/articles"

@Component({
  selector: "app-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.css"]
})
export class ArticleDetailComponent implements OnInit {

  article: Article = { id: 1, title: "1", content: "heyuiad sgihdjaduyksgado pjisuaykdfsugaihdkfsajdy adshj ads dsa dsa dsa dfsajhdsga dsa da d ad ad sad ad sad d as d sad asd as d sad s d sad a f fa fa fg", created: "today", updated: "today" }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const tmp = this.route.snapshot.paramMap.get("id")?.toString()
    this.article.title = tmp ? tmp : "1"
  }
}
