import { create } from 'zustand'

interface AppState {
  selectedCategory: string | null
  searchQuery: string
  setSelectedCategory: (category: string | null) => void
  setSearchQuery: (query: string) => void
}

export const useStore = create<AppState>((set) => ({
  selectedCategory: null,
  searchQuery: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}))
