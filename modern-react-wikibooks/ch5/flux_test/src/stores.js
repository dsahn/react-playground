import { appDispatcher } from "./appDispatcher";
import {ActionType} from './actions.js'

// 이번에 사용할 store
export const nameStore = {name: '', onChange: null}
export const messageStore = {name: '', onChange: null}

// Action 과 Store를 연결
appDispatcher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value
        nameStore.onChange()
    }
})

appDispatcher.register(payload => {
    if (payload.actionType === ActionType.SUBMIT_NAME) {
        messageStore.message = nameStore.name + '님 안녕하세요.'
        messageStore.onChange()
    }
})