import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  article = [
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Tom Hancock",
      title:
        "'The noises I'm hearing': Virgil van Dijk 'excited' by Liverpool's summer plans",
      description:
        "Van Dijk isn't concerned that the Reds' likely lack of Champions League football next season will harm their transfer ambitions",
      url: "https://www.fourfourtwo.com/news/the-noises-im-hearing-virgil-van-dijk-excited-by-liverpools-summer-plans",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WG8adyCG9NVLtC9oTpekEo-1200-80.jpg",
      publishedAt: "2023-05-21T16:42:43Z",
      content:
        "Virgil van Dijk is looking forward to an \"intense\" pre-season with Liverpool and doesn't believe that the Reds' probable lack of Champions League football next term will hinder them in the transfer m… ",
    },
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Tom Hancock",
      title:
        "'The noises I'm hearing': Virgil van Dijk 'excited' by Liverpool's summer plans",
      description:
        "Van Dijk isn't concerned that the Reds' likely lack of Champions League football next season will harm their transfer ambitions",
      url: "https://www.fourfourtwo.com/news/the-noises-im-hearing-virgil-van-dijk-excited-by-liverpools-summer-plans",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WG8adyCG9NVLtC9oTpekEo-1200-80.jpg",
      publishedAt: "2023-05-21T16:42:43Z",
      content:
        "Virgil van Dijk is looking forward to an \"intense\" pre-season with Liverpool and doesn't believe that the Reds' probable lack of Champions League football next term will hinder them in the transfer m… ",
    },
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Tom Hancock",
      title:
        "'The noises I'm hearing': Virgil van Dijk 'excited' by Liverpool's summer plans",
      description:
        "Van Dijk isn't concerned that the Reds' likely lack of Champions League football next season will harm their transfer ambitions",
      url: "https://www.fourfourtwo.com/news/the-noises-im-hearing-virgil-van-dijk-excited-by-liverpools-summer-plans",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WG8adyCG9NVLtC9oTpekEo-1200-80.jpg",
      publishedAt: "2023-05-21T16:42:43Z",
      content:
        "Virgil van Dijk is looking forward to an \"intense\" pre-season with Liverpool and doesn't believe that the Reds' probable lack of Champions League football next term will hinder them in the transfer m… ",
    },
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Tom Hancock",
      title:
        "'The noises I'm hearing': Virgil van Dijk 'excited' by Liverpool's summer plans",
      description:
        "Van Dijk isn't concerned that the Reds' likely lack of Champions League football next season will harm their transfer ambitions",
      url: "https://www.fourfourtwo.com/news/the-noises-im-hearing-virgil-van-dijk-excited-by-liverpools-summer-plans",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WG8adyCG9NVLtC9oTpekEo-1200-80.jpg",
      publishedAt: "2023-05-21T16:42:43Z",
      content:
        "Virgil van Dijk is looking forward to an \"intense\" pre-season with Liverpool and doesn't believe that the Reds' probable lack of Champions League football next term will hinder them in the transfer m… ",
    },
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Tom Hancock",
      title:
        "'The noises I'm hearing': Virgil van Dijk 'excited' by Liverpool's summer plans",
      description:
        "Van Dijk isn't concerned that the Reds' likely lack of Champions League football next season will harm their transfer ambitions",
      url: "https://www.fourfourtwo.com/news/the-noises-im-hearing-virgil-van-dijk-excited-by-liverpools-summer-plans",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WG8adyCG9NVLtC9oTpekEo-1200-80.jpg",
      publishedAt: "2023-05-21T16:42:43Z",
      content:
        "Virgil van Dijk is looking forward to an \"intense\" pre-season with Liverpool and doesn't believe that the Reds' probable lack of Champions League football next term will hinder them in the transfer m… ",
    },
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Tom Hancock",
      title:
        "'The noises I'm hearing': Virgil van Dijk 'excited' by Liverpool's summer plans",
      description:
        "Van Dijk isn't concerned that the Reds' likely lack of Champions League football next season will harm their transfer ambitions",
      url: "https://www.fourfourtwo.com/news/the-noises-im-hearing-virgil-van-dijk-excited-by-liverpools-summer-plans",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WG8adyCG9NVLtC9oTpekEo-1200-80.jpg",
      publishedAt: "2023-05-21T16:42:43Z",
      content:
        "Virgil van Dijk is looking forward to an \"intense\" pre-season with Liverpool and doesn't believe that the Reds' probable lack of Champions League football next term will hinder them in the transfer m… ",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.article,
    };
  }
  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="my-4">NewsMonkey - Top Headlines</h1>
          <div className="row my-3">
            {this.state.articles.map((article, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={article.title}
                    description={article.description.slice(0, 88) + "..."}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
