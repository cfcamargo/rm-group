import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
    state: () => ({
         footerColor: 'blue' 
    }),
    getters: {
      getFooterColor: (state) => state.footerColor
    },
    actions: {
      setFooterColor(color : 'blue' | 'green') {
        this.footerColor = color
      },
    },
  })