import * as UserRepo from '../../repositories/users'
import * as ShowRepo from '../../repositories/show'

export const like = async ({ email, showId}) => {
    if(!email || !showId) {
     throw new Error('dados invállidos') 
    }

    const user = await UserRepo.findByEmail(email)
    const show = await ShowRepo.findById(showId)
    console.log('user', user)
    console.log('show', show)
    if(!user || !show) {
      throw new Error('dados invállidos') 
     }

     user.shows = user.shows || []
     user.shows.push(show)

    await user.save()

     return true
}