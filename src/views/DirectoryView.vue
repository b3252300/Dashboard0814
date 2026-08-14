<template>
  <!-- used `style="height: 100vh;"` because without it in the Firefox 89 and Chrome 91 (June 2021) the `vue-pdf-app` is not rendering on the page, just empty space without any errors (since `vue-pdf-app` does not have height and it is the top tag in the generated markup ) -->
  <!-- or you can just wrap `vue-pdf-app` in <div> tag and set height for it via CSS (like in `Script tag (unpkg)` example below) -->
  <PdfApp style="height: 80vh" :pdf="apiPathUrl" @pages-rendered="pagesRendered" :config="config"></PdfApp>

</template>

<script setup>
import PdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
import { ref, reactive, watch } from "vue";
import useApi from "@/composable/useApi";
import axios from "axios";
import { useStorage } from "@/composable/useStorage";

const { UseApiFunction, GetApiRootUrl, GetFileUrl } = useApi();
const DirectoryData = reactive({ DirectoryFileRowId: null });
const apiPathUrl = ref("");
const StationCode = useStorage("StationCode");

const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
});

const config = ref({
  sidebar: false,
  secondaryToolbar: false,
  toolbar: {
    toolbarViewerLeft: {
      findbar: true,
      previous: false,
      next: false,
      pageNumber: false,
    },
    toolbarViewerRight: false,
    toolbarViewerMiddle: {
      zoomOut: true,
      zoomIn: true,
      scaleSelectContainer: true,
    },
  },
  errorWrapper: false,
});

function pagesRendered(pdfApp) {
  setTimeout(() => (pdfApp.pdfViewer.currentScaleValue = "page-width"));
}

// to do token
const GetDirectoryApi = async (RowId) => {
  const RequestData = reactive({
    // token: "123",
    FileRowId: RowId,
  });

  apiPathUrl.value = (await GetFileUrl()) + RequestData.FileRowId;
  await axios.get(apiPathUrl);
};

const CallDirectoryApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_DIRECTORY,
    PostData
  );
  if (res != undefined) {
    const { Data, Code, IsReload } = res.data;
    console.log(Data);

    if(IsReload){
      location.reload();
    }

    if (Code == "0") {
      DirectoryData.DirectoryFileRowId = Data.DirectoryFileRowId;
      GetDirectoryApi(DirectoryData.DirectoryFileRowId);
    } else {
      //console.log(Code);
      apiPathUrl.value = (await GetApiRootUrl()) + "/defaultfile/directory";
      //apiPathUrl.value = "https://localhost:7142/api/webapp/defaultfile/directory";
    }
  }
};

CallDirectoryApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;

  CallDirectoryApi();
});

</script>
