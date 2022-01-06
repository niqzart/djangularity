import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"

import { Article, Comment } from "../../data/articles"

@Component({
  selector: "app-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.css"]
})
export class ArticleDetailComponent implements OnInit {

  article: Article = { id: 1, title: "1", content: "heyuiad sgihdjaduyksgado pjisuaykdfsugaihdkfsajdy adshj ads dsa dsa dsa dfsajhdsga dsa da d ad ad sad ad sad d as d sad asd as d sad s d sad a f fa fa fg", created: "today", updated: "today" }

  commentForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required, Validators.minLength(10)]),
  }, { updateOn: "submit" })

  comments: Comment[] = []
  hasNext: boolean = true
  offset: number = 0
  limit: number = 20  // const

  fetchComments(): void {
    this.comments.push(...[
      { id: 1, username: "hey", content: "doiahduysadoihaduiasdhiakd", created: "today", updated: "today" },
      { id: 1, username: "hey", content: "doiahduysadoihaduiasdhiakd", created: "today", updated: "today" },
      { id: 1, username: "hey", content: "doiahduysadoihaduiasdhiakd", created: "today", updated: "today" },
      { id: 1, username: "hey", content: "doiahduysadoihaduiasdhiakd", created: "today", updated: "today" },
      { id: 1, username: "hey", content: "doiahduysadoihaduiasdhiakd", created: "today", updated: "today" },
    ])  // request
    this.offset = this.comments.length
    this.hasNext = true  // request
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchComments()

    const tmp = this.route.snapshot.paramMap.get("id")?.toString()
    this.article.title = tmp ? tmp : "1"
  }

  comment(): void {
    // send

    this.offset = 0
    this.fetchComments()
  }
}
