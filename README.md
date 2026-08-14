# 新康智慧病房儀表板

本專案為打造高效醫療協作的智慧病房儀表板前端系統，專注於複雜資訊整合、嚴謹表單驗證與權限控管的實踐。

---

## 🛠 技術棧 (Tech Stack)
- **核心框架**: Vue 3 (Composition API)
- **路由管理**: Vue Router
- **樣式佈局**: Bootstrap +  CSS (RWD 效能優化)
- **即時通訊**: SignalR (WebSocket 長連接)
- **建構工具**: Vite

---

## 🎯 前端開發重點 (Development Focus)

### 1. 全域架構與 RWD 佈局
- **組件化設計**: 高復用性元件 (Components) 與模組化 Vue Router 設計。
- **跨裝置響應式**: 支援大螢幕儀表板 TV、桌機/筆電，以及移動裝置 (`< 1024px`)，兼顧渲染效能。

### 2. 即時資訊看板 (Real-time UI)
- **SignalR 長連接**: 頁首關鍵病房統計數據 (如緊急通報數量) 採 SignalR 實時推送，動態更新元件免刷頁。
- **複雜資料互動**: 整合病房狀態、緊急通知、警示系統等高頻更新之數據流。

### 3. 安全性與權限控管
- **角色權限渲染**: 依登入角色權限 (如護理師帳號) 動態過濾並呈現對應病房資訊。
- **安全防護機制**: 
  - 密碼強度嚴格驗證。
  - 閒置自動登出與螢幕鎖定機制。

---

## 🚀 專案指令 (Scripts)

### 安裝依賴
```bash

npm install
```

### 本地開發 (Dev Server)
```bash
npm run dev
```

### 生產環境打包 (Build)
```bash
npm run build
```

### 程式碼檢查 (Lint)
```bash
npm run lint
```

