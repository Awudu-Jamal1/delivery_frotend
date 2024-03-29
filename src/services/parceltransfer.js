import Api from "./Api";

export default {
  accept(info) {
    return Api().post("/order", info);
  },
  getTransaction(info) {
    return Api().get("/order", { params: info });
  },
  track(id) {
    return Api().get(`/order/track/${id}`);
  },
  getall(book) {
    return Api().get("order/getall", book);
  },
  request(id) {
    return Api().put(`order/getall/update`, id);
  },
  active(id) {
    return Api().get(`order/getall/active`,{params:id});
  },historyA(id) {
    return Api().get(`order/history/agent`,{params:id});
  },
};
