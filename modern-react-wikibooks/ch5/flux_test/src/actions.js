import { appDispatcher } from "./appDispatcher";

// 이번에 사용할 Action
export const ActionType = {
    CHANGE_NAME: 'CHANGE_NAME',
    SUBMIT_NAME: 'SUBMIT_NAME'
}

// Action을 생성하고 ... Dispatcher 에 정보를 전달
export const Actions = {
    changeName: (name) => {
        if (name === null) return
        // dispatch : 등록한 콜백 함수를 모두 실행
        appDispatcher.dispatch({
            actionType: ActionType.CHANGE_NAME,
            value: name })
    },
    submitName: () => {
        appDispatcher.dispatch({
            actionType: ActionType.SUBMIT_NAME })
    }
}