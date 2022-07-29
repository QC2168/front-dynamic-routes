import { UserType } from "./../types/index";
import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore(
  "user",
  () => {
    const userinfo = ref<UserType | null>(null);
    const setUserInfo = async (data: UserType) => {
        userinfo.value = data;
    };
    return {
      userinfo,
      setUserInfo,
    };
  },
  {
    persist: true,
  }
);
