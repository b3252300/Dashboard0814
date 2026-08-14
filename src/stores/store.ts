import { defineStore } from 'pinia'

export type GlobalType = {
  routeKey: number,
  headerKey: number,
  footerKey:number,
  loading: boolean,
  alertFilter: Array<String>,
  doctorFilter: Object,
  teamFilter: Object,
  bedStatusFilter: Array<String>,
  signalr:signalR.HubConnection,
  alertSortColumn: Object,
  badgeSortColumn: String,
}

export const useGlobalStore = defineStore({
  id: 'global',
  state: (): GlobalType => ({
    routeKey: 0,
    headerKey: 0,
    footerKey: 0,
    loading: false,
    alertFilter: [],
    doctorFilter: {},
    teamFilter: {},
    bedStatusFilter: [],
    signalr:null,
    alertSortColumn: {},
    badgeSortColumn: null
  })
})

