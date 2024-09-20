import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const theme = ref('myLightTheme')

    const themesList = ref([
      {
        id: "01",
        title: "Escuro",
        name: "dark",
        icon: 'mdi-weather-night'
      },
      {
        id: "02",
        title: "Claro",
        name: "myLightTheme",
        icon: 'mdi-weather-sunny'
      },
    ]);

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
                      type: 'Tipo do Feedback'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })

    return { theme, themesList, localData }
  },
  { persist: true }
)
