// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
// import useVersionCheck from "@/composable/useVersionCheck";
import app from "@/main";
// import useLoggin from "@/composable/useLoggin";
import { encryptStorage } from "@/stores/EncryptStorage";

// const { versionCheck } = useVersionCheck();
// const { isLoggin } = useLoggin();

function createRouteGuard(router) {
  router.beforeEach(async (to, from, next) => {


    const userToken = encryptStorage.getItem("Token") == undefined;
    console.log(userToken);
    // console.log(to);
    // console.log(from);
    // console.log(next);
    // if (userToken) {
    //   return true;
    // } else {
    //   return false;
    // }
    // NProgress.start();
    // versionCheck();
    app.config.globalProperties.$Progress.start();
    if (to.meta.requireAuth && userToken) {

      next({ name: "login" });
    } else {

      next();
    }
  });

  router.afterEach((to) => {
    app.config.globalProperties.$Progress.finish();
  });
}

export default createRouteGuard;
