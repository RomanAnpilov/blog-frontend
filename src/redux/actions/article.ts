import axios from "axios";

export const fetchArticles = () => (dispatch: any) => {
  axios.get("http://localhost:4000/articles/").then((data) => dispatch(setArticles(data)));
};

const setArticles = (articles: any) => ({
  type: "SET_ARTICLES",
  payload: articles,
});
