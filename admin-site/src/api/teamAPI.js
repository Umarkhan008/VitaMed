import { supabase } from '../supabaseClient'

// Fetch all team members
export async function fetchTeamMembers() {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .order('created_at', { ascending: true })

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error fetching team members:', error)
        return []
    }
}

// Get single team member
export async function getTeamMemberById(memberId) {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .eq('id', memberId)
            .single()

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error fetching team member:', error)
        return null
    }
}

// Create team member
export async function createTeamMember(memberData) {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .insert([memberData])
            .select()

        if (error) throw error
        return { success: true, member: data[0] }
    } catch (error) {
        console.error('Error creating team member:', error)
        return { success: false, error: error.message }
    }
}

// Update team member
export async function updateTeamMember(memberId, updatedData) {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .update(updatedData)
            .eq('id', memberId)
            .select()

        if (error) throw error
        return { success: true, member: data[0] }
    } catch (error) {
        console.error('Error updating team member:', error)
        return { success: false, error: error.message }
    }
}

// Delete team member
export async function deleteTeamMember(memberId) {
    try {
        const { error } = await supabase
            .from('team_members')
            .delete()
            .eq('id', memberId)

        if (error) throw error
        return { success: true }
    } catch (error) {
        console.error('Error deleting team member:', error)
        return { success: false, error: error.message }
    }
}

