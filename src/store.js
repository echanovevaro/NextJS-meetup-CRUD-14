
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const useMeetupsStore = create(
  persist(
  (set) => ({
  meetup: {},
  updateMeetup: (newMeetup) => set((state) => ({meetup: newMeetup })),
}), {
  name: 'meetup'
}
))

export default useMeetupsStore