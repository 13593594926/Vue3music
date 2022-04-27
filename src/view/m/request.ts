import { get, post } from "@/request/index";

export const personalized = () => {
  return get("/weapi/personalized", { limit: 6 });
};
export const personalizedNewsong = () => {
  return post("/weapi/personalized/newsong?csrf_token=571f3843e45716b2e1d80f82c11cd431", {
    params:
      "6xJBLbKsEJot+YmokFT6rRe68aEqaBUe9iEY5JqbVGsJvo+03kOA/Sl+6sXohXoEpFVCA+XXG+lOEJR/YFvmL5jo178D2PqbTgXrMjKe4dWQg1BcvXKVzGZmAlnWcPxWP7Oiy1Eqmy2CI1BVYmUNYQ==",
    encSecKey:
      "1076e3475a0aaf15ddd4e69d1dfdfc666fc2aff76be1f5ac12374cb454eed8f56efb4c710d8973d4f279a721575ed018c60b8f645a22d6523a695c35d25046de8feaf95d10a58c0c4b22086d5b6c21c5b88c2f764c69bd485df75c950dd798b3177807f856b222666750a357c8307709c998a258600c70344af3f8b2521ff855",
  });
};
