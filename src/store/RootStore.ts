import { configureStore , combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({

})

const rootStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof rootStore>
export type AppDispatch = AppStore['dispatch']

export const globalStore = rootStore()