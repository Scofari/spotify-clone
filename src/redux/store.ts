import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import defaultReducer from './defaultSlice'
import playerReducer from './playerSlice'
import playlistsReducer from './playlistsSlice'

export const store = configureStore({
	reducer: {
		playlists: playlistsReducer,
		player: playerReducer,
		default: defaultReducer,
	},
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
