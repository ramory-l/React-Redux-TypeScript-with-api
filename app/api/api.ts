import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://mobile-dev.oblakogroup.ru/candidate/IvanIvanov",
});

export default apiClient;
