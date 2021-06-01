import { createStore, combineReducers } from 'redux'
import { english, portuguese } from '../constants'

const INITIAL_STATE = {
  data: {
    name: '',
    description: '',
    monsterType: 'Indefinido',
    size: 'Indefinido',
    level: 0,
    challengeLevel: 0,
    defense: 0,
    distance: 0,
    healthpoints: 0,
    currentHealth: 0,
    manapoints: 0,
    currentMana: 0,
    treasury: '',
    notes: '',
    mugshot: '',
    attributes: [
      {
        name: 'FOR',
        value: 0,
        modificator: 0
      },
      {
        name: 'DES',
        value: 0,
        modificator: 0
      },
      {
        name: 'CON',
        value: 0,
        modificator: 0
      },
      {
        name: 'INT',
        value: 0,
        modificator: 0
      },
      {
        name: 'SAB',
        value: 0,
        modificator: 0
      },
      {
        name: 'CAR',
        value: 0,
        modificator: 0
      }
    ],
    senses: [
      {
        name: '',
        rolling: ''
      }
    ],
    skills: [
      {
        name: '',
        rolling: ''
      }
    ],
    attacks: [
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
  const attrList = state.data.attributes
  const perksList = state.data[listType]
  const abilitiesList = state.data.attacks
  const attrIndex = attrList.findIndex(attr => attr.name === key)
  const index = action.index

  const baseModificator = -5
  const modificator = Math.floor(Number(value) / 2) + baseModificator

  switch (action.type) {
    case 'UPDATE_DATA':
      if (key === 'healthpoints') {
        return {
          ...state,
          data: { ...state.data, healthpoints: value, currentHealth: value }
        }
      } else if (key === 'manapoints') {
        return {
          ...state,
          data: { ...state.data, manapoints: value, currentMana: value }
        }
      } else {
        return { ...state, data: { ...state.data, [key]: value } }
      }
    case 'UPDATE_ATTRIBUTES':
      attrList[attrIndex] = {
        name: key,
        value: Number(value),
        modificator
      }

      return {
        ...state,
        data: {
          ...state.data,
          attributes: [...attrList]
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
          attacks: [...abilitiesList]
        }
      }
    default:
      return state
  }
}

const INITIAL_LANGUAGE = english

const language = (state = INITIAL_LANGUAGE, action) => {
  switch (action.type) {
    case 'ENGLISH':
      localStorage.setItem('language', 'ENGLISH')
      return english
    case 'PORTUGUESE':
      localStorage.setItem('language', 'PORTUGUESE')
      return portuguese
    default:
      return state
  }
}

const reducers = combineReducers({
  monsterData,
  language
})

const store = createStore(reducers)

export default store
