import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
  };
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
  };

  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      btn: true,
    };
  }
  shiftBack = async () => {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=8a8962880f724316bce97281773559d1&page=${
      this.page - 1
    }&pageSize=21`;
    this.setState({ loading: true, btn: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseDAta = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parseDAta.articles,
      page: this.page - 1,
      loading: false,
      btn: false,
    });
    this.scrollToTop();
    this.props.setProgress(100);
  };

  Cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  shiftFront = async () => {
    if (this.state.page + 1 >= Math.ceil(this.state.totalResults / 21)) {
    } else {
      this.props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=8a8962880f724316bce97281773559d1&page=${
        this.state.page + 1
      }&pageSize=21`;
      this.setState({ loading: true, btn: true });
      let data = await fetch(url);
      this.props.setProgress(30);
      let parseDAta = await data.json();
      this.props.setProgress(50);
      this.setState({
        articles: parseDAta.articles,
        page: this.state.page + 1,
        loading: false,
        btn: false,
      });
      this.props.setProgress(100);
      this.scrollToTop();
    }
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a8962880f724316bce97281773559d1&page=1&pageSize=21`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseDAta = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parseDAta.articles,
      totalResults: parseDAta.totalResults,
      loading: false,
      btn: false,
    });
    this.props.setProgress(100);
  }

  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center " style={{ margin: "40px 0px" }}>
          Eagle News - Top Headlines On {this.Cap(this.props.category)}
        </h2>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    sorce={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            hidden={this.state.btn}
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.shiftBack}
          >
            &larr; Previous
          </button>
          <button
            hidden={this.state.btn}
            disabled={
              this.state.page + 1 >= Math.ceil(this.state.totalResults / 21)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.shiftFront}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
