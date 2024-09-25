import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const theme = ref('myLightTheme')

    const themesList = ref([
      {
        id: '01',
        title: 'Escuro',
        name: 'dark',
        icon: 'mdi-weather-night'
      },
      {
        id: '02',
        title: 'Claro',
        name: 'myLightTheme',
        icon: 'mdi-weather-sunny'
      }
    ])

    const CONFIG = ref({
      fields: {
        radio: {
          label: 'Rádio',
          buttons: [
            {
              id: '01',
              label: 'Sim'
            },
            {
              id: '02',
              label: 'Não'
            }
          ],
          value: null
        },
        checkbox: {
          label: 'Checkbox',
          buttons: [
            {
              id: '01',
              label: 'Item 01',
              checked: true
            },
            {
              id: '02',
              label: 'Item 02',
              checked: false
            }
          ],
          value: null
        },
        select: {
          label: 'Select',
          autocomplete: true,
          items: [
            {
              id: '01',
              title: 'Item 01'
            }
          ],
          value: null
        },
        text: {
          label: 'Text',
          value: null
        },
        date: {
          label: 'Date',
          value: null
        },
        buttom: {
          label: 'Buttom',
          action: {}
        }
      },
      fieldsType: [
        {
          title: 'Rádio',
          type: 'radio',
          icon: 'mdi-radiobox-indeterminate-variant'
        },
        {
          title: 'Checkbox',
          type: 'checkbox',
          icon: 'mdi-checkbox-multiple-marked-outline'
        },
        {
          title: 'Select',
          type: 'select',
          icon: 'mdi-form-select'
        },
        {
          title: 'Text',
          type: 'text',
          icon: 'mdi-form-textbox'
        },
        {
          title: 'Date',
          type: 'date',
          icon: 'mdi-calendar-check-outline'
        },
        {
          title: 'Buttom',
          type: 'buttom',
          icon: 'mdi-button-pointer'
        }
      ]
    })

    const localData = ref({
      imrb: [
        {
          id: '01',
          name: 'Nome do Protótipo',
          description: 'Descrição do Protótipo',
          process: [
            {
              id: '01',
              name: 'Nome do Processo',
              description: 'Descrição do Processo',
              phases: [
                {
                  id: '01',
                  name: 'Nome da Etapa',
                  description: 'Descrição da Etapa',
                  isRule: true,
                  rule: 'Regra da Etapa',
                  phases: [
                    {
                      id: '01',
                      name: 'Nome do Passo',
                      description: 'Descrição do Passo',
                      isRule: true,
                      rule: 'Regra do Passo',
                      layout: [
                        {
                          x: 0,
                          y: 0,
                          w: 4,
                          h: 2,
                          i: '01',
                          isRule: true,
                          rule: 'Regra do Campo'
                        }
                      ],
                      responsive: true
                    }
                  ],
                  feedbacks: [
                    {
                      id: '01',
                      title: 'Titulo do Feedback',
                      subTitle: 'Sub Título do Feedback',
                      type: 'Tipo do Feedback',
                      isRule: true,
                      rule: 'Regra do Feedback',
                      isButton: true,
                      button: {
                        text: 'Texto'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })

    const isDrag = ref(false)

    function allowDropTool(ev) {
      ev.preventDefault()
    }

    function dragTool(ev) {
      ev.dataTransfer.setData('text', ev.target.id)
      isDrag.value = true
    }

    function dropTool(ev, route) {
      ev.preventDefault()
      const data = ev.dataTransfer.getData('text')
      console.log(data)
      console.log(route.params.idPrototype)
    }

    function bytesToBase64(bytes) {
      const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('')
      return btoa(binString)
    }

    function gerarIdx(array) {
      const idx = Math.floor(Math.random() * (array.length - 1))
      return idx
    }

    function geraId() {
      const base64 = bytesToBase64(new TextEncoder().encode(`${Date.now()}`))
      let id = ''
      for (let i = 0; i < base64.length; i++) {
        id += base64[gerarIdx(base64)] + `${Date.now()}`[gerarIdx(`${Date.now()}`)]
      }
      return id
    }

    return {
      theme,
      themesList,
      CONFIG,
      localData,
      allowDropTool,
      dropTool,
      dragTool,
      isDrag,
      geraId,
      gerarIdx
    }
  },
  { persist: true }
)
