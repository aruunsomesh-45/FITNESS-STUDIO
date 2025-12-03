import { supabase } from './supabase'
import { Database } from './database.types'

export type Trainer = Database['public']['Tables']['trainers']['Row']
export type Class = Database['public']['Tables']['classes']['Row'] & {
    trainers: Trainer | null
}

export const api = {
    // Trainers
    getTrainers: async () => {
        const { data, error } = await supabase
            .from('trainers')
            .select('*')
            .order('name')

        if (error) throw error
        return data
    },

    getTrainerById: async (id: string) => {
        const { data, error } = await supabase
            .from('trainers')
            .select('*')
            .eq('id', id)
            .single()

        if (error) throw error
        return data
    },

    // Classes
    getClasses: async () => {
        const { data, error } = await supabase
            .from('classes')
            .select(`
        *,
        trainers (*)
      `)
            .order('start_time')

        if (error) throw error
        return data as Class[]
    },

    getUpcomingClasses: async () => {
        const { data, error } = await supabase
            .from('classes')
            .select(`
        *,
        trainers (*)
      `)
            .gte('start_time', new Date().toISOString())
            .order('start_time')
            .limit(10)

        if (error) throw error
        return data as Class[]
    },

    getClassById: async (id: string) => {
        const { data, error } = await supabase
            .from('classes')
            .select(`
        *,
        trainers (*)
      `)
            .eq('id', id)
            .single()

        if (error) throw error
        return data as Class
    },

    // Bookings
    bookClass: async (classId: string, userId: string) => {
        const { data, error } = await supabase
            .from('bookings')
            .insert({ class_id: classId, user_id: userId })
            .select()
            .single()

        if (error) throw error
        return data
    },

    getUserBookings: async (userId: string) => {
        const { data, error } = await supabase
            .from('bookings')
            .select(`
        *,
        classes (
          *,
          trainers (*)
        )
      `)
            .eq('user_id', userId)
            .eq('status', 'confirmed')
            .order('created_at', { ascending: false })

        if (error) throw error
        return data
    },

    cancelBooking: async (bookingId: string) => {
        const { data, error } = await supabase
            .from('bookings')
            .update({ status: 'cancelled' })
            .eq('id', bookingId)
            .select()
            .single()

        if (error) throw error
        return data
    },

    // Profiles
    getUserProfile: async (userId: string) => {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single()

        if (error) throw error
        return data
    },

    updateUserProfile: async (userId: string, updates: { full_name?: string; avatar_url?: string }) => {
        const { data, error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', userId)
            .select()
            .single()

        if (error) throw error
        return data
    }
}
