import { createStore } from 'redux'

const INITIAL_STATE = {
  data: {
    name: '',
    description: '',
    level: 0,
    defense: 0,
    distance: 0,
    healthpoints: 0,
    treasury: '',
    notes: '',
    attributeList: [
      {
        attributeName: 'FOR',
        value: 0,
        modificator: 0
      },
      {
        attributeName: 'DES',
        value: 0,
        modificator: 0
      },
      {
        attributeName: 'CON',
        value: 0,
        modificator: 0
      },
      {
        attributeName: 'INT',
        value: 0,
        modificator: 0
      },
      {
        attributeName: 'SAB',
        value: 0,
        modificator: 0
      },
      {
        attributeName: 'CAR',
        value: 0,
        modificator: 0
      }
    ],
    sensesList: [
      {
        name: '',
        rolling: ''
      }
    ],
    resistanceList: [
      {
        name: '',
        rolling: ''
      }
    ],
    attacksList: [
      {
        attackName: '',
        bonus: '',
        damage: '',
        critic: '',
        attType: '',
        range: '',
        test: ''
      }
    ]
  }
}

const monsterData = (state = INITIAL_STATE, action) => {
  const key = Object.keys(action)[1]
  const value = action[key]
  const listType = action.listType
  const attrList = state.data.attributeList
  const perksList = state.data[listType]
  const abilitiesList = state.data.attacksList
  const attrIndex = attrList.findIndex(attr => attr.attributeName === key)
  const index = action.index

  const baseModificator = -5
  const modificator = Math.floor(Number(value) / 2) + baseModificator

  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: { ...state.data, [key]: value } }
    case 'UPDATE_ATTRIBUTES':
      attrList[attrIndex] = {
        attributeName: key,
        value: Number(value),
        modificator
      }

      return {
        ...state,
        data: {
          ...state.data,
          attributeList: [...attrList]
        }
      }
    case 'UPDATE_PERKS':
      perksList[index] = { ...perksList[index], [key]: value }

      return {
        ...state,
        data: {
          ...state.data,
          [listType]: [...perksList]
        }
      }
    case 'UPDATE_ABILITIES':
      abilitiesList[index] = { ...abilitiesList[index], [key]: value }

      return {
        ...state,
        data: {
          ...state.data,
          attacksList: [...abilitiesList]
        }
      }
    default:
      return state
  }
}

const store = createStore(monsterData)

export default store
